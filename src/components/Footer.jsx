import React from "react";
import "../styles/footerStyles.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-container-top">
          <div className="footer-info">
            <h5>GET IN TOUCH</h5>
            <div className="footer-info-content">
              <div>
                <span>
                  <FaPhone style={{ color: "#fff", marginRight: "10px" }} />
                </span>{" "}
                <span>+91-9019446265</span>
              </div>
              <div>
                <span>
                  <MdEmail style={{ color: "#fff", marginRight: "10px" }} />
                </span>{" "}
                <a
                  href="mailto:info.maanindustries@gmail.com"
                  className="footer-email-link"
                >
                  <span>info.maanindustries@gmail.com</span>
                </a>
              </div>
              <div>
                <span>
                  <FaLocationDot
                    style={{ color: "#fff", marginRight: "10px" }}
                  />
                </span>{" "}
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          <div className="footer-social">
            <h5>FOLLOW US</h5>
            <div>
              <a
                href="https://www.linkedin.com/company/maanindustries/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={20}
                  style={{ color: "#fff", marginRight: "10px" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-container-bottom">
          <p>© 2024 Maan Industries. All rights reserved.</p>
          <p onClick={scrollToTop} style={{cursor:"pointer"}}>SCROLL TOP ↑</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
