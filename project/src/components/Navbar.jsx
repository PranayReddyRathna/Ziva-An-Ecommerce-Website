import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navContainer">
      <h1>Ziva</h1>
      <ul className="navbarItems">
        <li to="/">Home</li>
        <li to="/products">Products</li>
        <li to="/about">About</li>
        <li to="/contact">Contact</li>
      </ul>
      <button>
      Get Started
      </button>
    </div>
  );
};

export default Navbar;
