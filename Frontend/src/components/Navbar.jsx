import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <h2>Interior Design Studio</h2>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;