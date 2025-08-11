import { Link } from "react-router-dom";
import "./Homepage.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-name">
              <span className="text-orange">Pustak</span> Ghar
            </h3>
            <p className="brand-tagline">
              Empowering students with quality education resources
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/search">Search</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <Link to="/notes">Notes</Link>
              <Link to="/papers">Previous Papers</Link>
              <Link to="/videos">Video Lectures</Link>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/help">Help Center</Link>
              <Link to="/feedback">Feedback</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Pustak Ghar. Made with ❤️ for students</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
