import React from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";

const MobileNav = ({ toggleMobilenavVisible, mobilenavVisible }) => {
  return (
    <div className="mobilenav-wrapper">
      <div className={"mobilenav " + (mobilenavVisible ? "on" : "off")}>
        <div className="mobilenavlinks">
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              ГЛАВНАЯ
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              ОБО МНЕ
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              ОПЫТ
            </Link>
          </div>
          {/* <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              ПРОЕКТЫ
            </Link>
          </div> */}
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              КОНТАКТЫ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
