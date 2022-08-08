import './../../css/navbar.css';
const Navbar = () => {

  return (
    <div className="__navbar">
      <div className="__navbar-links">
        <div className="__navbar-links_container">
          <p><a href="https://Ajay-o-s.github.io">Home</a></p>
          <p><a href="https://github.com/Ajay-o-s/">Github</a></p>
          <p><a href="https://Ajay-o-s.github.io/Love">Love</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};


export default Navbar;