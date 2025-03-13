import { Link } from "react-scroll";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img width={170} src="./img/logo.svg" alt="faizan" />
          <p className="footer-about-text">
            Showcases my skills in development through a collection of projects.
            It's a space where you can get a glimpse of my work and the creative
            process behind it.
          </p>
        </div>
        <div className="footer--items">
          <h2 className="footer--items-heading">Link</h2>
          <ul>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--items">
          <h2 className="footer--items-heading">Contact Me</h2>
          <ul>
            <li>
              <a
                className="footer--items--links"
                href="mailto:faizank9058@gmail.com"
              >
                faizank9058@gmail.com
              </a>
            </li>
            <li>
              <a className="footer--items--links" href="tel:+911187961267">
                9389612947
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider"></div>

      <div className="footer--content--container">
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                className="fa--icon"
                href="https://www.facebook.com/faizannkh"
                target="blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                className="fa--icon"
                href="https://x.com/FaizanKhan35077"
                target="blank"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                className="fa--icon"
                href="https://www.linkedin.com/in/faizan-khan-84b640264/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                className="fa--icon"
                href="https://www.instagram.com/thefaizankhan._/"
                target="blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <span className="footer--copyright">
          &copy; 2025 Faizan. All Rights Reserved.
        </span>
        <div className="legal--clarity">
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
