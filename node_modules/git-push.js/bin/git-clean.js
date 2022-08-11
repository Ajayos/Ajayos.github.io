#!/usr/bin/env node

const Git = require('../lib/index.js');

function main() {Git.clean();};

if (require.main === module) {main();};

module.exports = main;
