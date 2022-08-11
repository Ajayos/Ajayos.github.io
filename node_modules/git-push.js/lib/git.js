const { rejects } = require('assert');
const cp = require('child_process');
const fs = require('fs-extra');
const { resolve } = require('path');
const path = require('path');
const util = require('util');

/**
 * @function object() { [native code] }
 * @param { number } code Error code.
 * @param { string } message Error message.
 */

function ProcessError(code, message) {
    const callee = arguments.callee;
    Error.apply(this, [ message ]);
    Error.captureStackTrace(this, callee);
    this.code = code;
    this.message = message;
    this.name = callee.name;
};

util.inherits(ProcessError, Error);

/**
 * @param { string } exe Executable.
 * @param { Array<string } args Arguments.
 * @param { string } cmd Working Directory.
 * @return { Promise } A Promise.
 */

function spawn(exe, args, cwd) {
    return new Promise((resolve, rejects) => {
        const child = cp.spawn(exe, args, {cwd: cwd || process.cmd()});
        const buffer = [];

        child.stderr.on('data', (chunk) => {buffer.push(chunk.toString());});

        child.stdout.on('data', (chunk) => {buffer.push(chunk.toString())});

        child.on('close', (code) => {
            const output = buffer.join('');
            if(code) {
                const msg = output || 'Process failed => '+code;
                reject(new ProcessError(code, msg));
            } else {resolve(output);}
        });
    });
};

/**
 * @param { string } cmd Repository directory.
 * @param { string } cmd Git executable (full path if not already on path).
 * @function object() { [ native code ] }.
 */

function Git(cwd, cmd) {
    this.cwd = cwd;
    this.cmd = cmd || 'git';
    this.output = ' ';
};

/**
 * @param { Array<string> } args Arguments (e.g. [ 'remote', 'update'] ).
 * @return { Promise } A promise.
 */

Git.prototype.exec = function (...args) {
    return spawn(this.cmd, [...args], this.cwd).then((output) => {
        this.output = output;
        return this;
    });
};

/**
 * @return { promise } A promise.
 */

Git.prototype.init = function() {return this.exec('init');};

/**
 * @return { promise } A promise.
 */

Git.prototype.clean = function() {return this.exec('clean', '-f', '-d');};

/**
 * Hard reset to remote/branch
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */

Git.prototype.reset = function (remote, branch) {return this.exec('reset', '--hard', remote + '/' + branch);};
  
/**
 * Fetch from a remote.
 * @param {string} remote Remote alias.
 * @return {Promise} A promise.
 */

Git.prototype.fetch = function (remote) {return this.exec('fetch', remote);};

/**
 * Checkout a branch (create an orphan if it doesn't exist on the remote).
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */
 Git.prototype.checkout = function (remote, branch) {
    const treeish = remote + '/' + branch;
    return this.exec('ls-remote', '--exit-code', '.', treeish)
    .then(() => {
        // branch exists on remote, hard reset
        return this.exec('checkout', branch)
            .then(() => this.clean())
            .then(() => this.reset(remote, branch));
    }, (error) => {
        if (error instanceof ProcessError && error.code === 2) {return this.exec('checkout', '--orphan', branch);} else {throw error;}
    });
};

/**
 * Remove all unversioned files.
 * @param {string | Array<string>} files Files argument.
 * @return {Promise} A promise.
 */
 
Git.prototype.rm = function (files) {
    if (!Array.isArray(files)) {files = [files];}
    return this.exec('rm', '--ignore-unmatch', '-r', '-f', ...files);
};

/**
 * Add files.
 * @param {string | Array<string>} files Files argument.
 * @return {Promise} A promise.
 */
 
Git.prototype.add = function (files) {
    if (!Array.isArray(files)) {files = [files];}
    return this.exec('add', ...files);
};

/**
 * Commit (if there are any changes).
 * @param {string} message Commit message.
 * @return {Promise} A promise.
 */

Git.prototype.commit = function (message) {return this.exec('diff-index', '--quiet', 'HEAD').catch(() =>this.exec('commit', '-m', message));};

/**
 * Add tag
 * @param {string} name Name of tag.
 * @return {Promise} A promise.
 */

Git.prototype.tag = function (name) {return this.exec('tag', name);};

/**
 * Push a branch.
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @param {boolean} force Force push.
 * @return {Promise} A promise.
 */
 
Git.prototype.push = function (remote, branch, force) {
    const args = ['push', '--tags', remote, branch];
    if (force) {args.push('--force');}
    return this.exec.apply(this, args);
};

/**
 * Pull a branch.
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @param {boolean} force Force push.
 * @return {Promise} A promise.
 */
 
 Git.prototype.pull = function (remote, branch, force) {
    const args = ['pull', '--tags', remote, branch];
    if (force) {args.pull('--force');}
    return this.exec.apply(this, args);
};

/**
 * @param { string } remote Remote alias.
 * @return { Promise<string> } A promis for remote url.
 */

Git.prototype.getRemoteUrl = function(remote) {
    return this.exec('config', '--get', 'remote.' + remote + '.url').then((git) => {
       const repo = git.output && git.output.split(/[\n\r]/).shift();
       if(repo) {return repo;} else {throw new Error('Failed to get repo URL from options or current directory.');}
    
    }).catch((err) => {throw new Error('Failed to get remote.' + remote + '.url (task must either be ' + 'run in a git repository with a configured ' + remote +' remote ' +'or must be configured with the "repo" option).');});
};

/**
 * @param {string} branch The branch name.
 * @return {Promise} A promise.
 */
 Git.prototype.deleteRef = function (branch) {return this.exec('update-ref', '-d', 'refs/heads/' + branch);};

/**
 * @param { string } repo Repository URL.
 * @param {string} dir Target directory.
 * @param {string} branch Branch name.
 * @param {options} options All options.
 * @return {Promise<Git>} A promise.
 */

 Git.clone = function clone(repo, dir, branch, options) {
    return fs.exists(dir).then((exists) => {
        if (exists) {
            return Promise.resolve(new Git(dir, options.git));
        } else {
            return fs.mkdirp(path.dirname(path.resolve(dir))).then(() => {
                const args = [ 'clone', repo, dir, '--branch', branch, '--single-branch', '--origin', options.remote, '--depth', options.depth,];
                return spawn(options.git, args).catch((err) => { return spawn(options.git, ['clone', repo, dir, '--origin', options.remote,]);}).then(() => new Git(dir, options.git));
            });
        }
    });
};
  

// Data exporting
module.exports = Git;