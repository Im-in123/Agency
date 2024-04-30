import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { SITE_NAME } from "../constants/constant";

function Header(props) {
  const location = useLocation();
  const currentPathname = location.pathname;
  console.log(currentPathname);
  // document.title = SITE_NAME;
  useEffect(() => {
    // Add or remove the 'active-nav' class based on the currentPathname
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPathname) {
        link.classList.add("active-nav");
      } else {
        link.classList.remove("active-nav");
      }
    });
  }, [currentPathname]);

  useEffect(() => {
    try {
    } catch (error) {}
    // Add or remove the 'active-nav' class based on the currentPathname
    const navLinks = document.querySelectorAll(".nav-link-2");
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPathname) {
        link.classList.add("active-nav");
      } else {
        link.classList.remove("active-nav");
      }
    });
  }, [currentPathname]);

  useEffect(() => {
    // Open the navbar
    try {
      document
        .getElementById("openNavButton")
        .addEventListener("click", clickFunc);

      // Close the navbar
      document
        .getElementById("closeNavButton")
        .addEventListener("click", closeFunc);
    } catch (error) {}

    function clickFunc() {
      document.getElementById("myNav").style.display = "block";

      document.getElementById("myNav").style.width = "250px";
    }
    function closeFunc() {
      document.getElementById("myNav").style.width = "0";
    }
    return () => {
      try {
        document
          .getElementById("openNavButton")
          .removeEventListener("click", clickFunc);
        document
          .getElementById("closeNavButton")
          .removeEventListener("click", closeFunc);
      } catch (error) {}
    };
  }, []);

  return (
    <>
      <header className="site-header ">
        <div className="header-bar">
          <div className="site-logo">
            <span className="site-logo-image">
              <Link to="/" className="logo-link">
                {" "}
                <img src={logo} alt="logo" />
              </Link>{" "}
              <span> &nbsp;{SITE_NAME}</span>
            </span>
          </div>
          <div className="nav">
            <Link to="/" className="nav-link" id="n-h">
              HOME
            </Link>
            <Link to="/services" className="nav-link" id="n-s">
              SERVICES
            </Link>
            <Link to="/about" className="nav-link" id="n-a">
              ABOUT
            </Link>
            <Link to="/contact" className="nav-link" id="n-c">
              CONTACT
            </Link>
          </div>
          <div className="small-nav">
            <button class="openNavButton" id="openNavButton">
              <svg
                class="ast-mobile-svg ast-menu-svg"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="banner" style={{ paddingTop: props?.name && "4rem" }}>
          <div
            className="banner-text"
            style={{ paddingTop: props?.name && "1%" }}
          >
            {props.name ? (
              <h1 className=" white with-break big-h">
                <span
                  style={{
                    width: 67,
                    height: 5,
                    backgroundColor: "burlywood",
                    // marginBottom: 10,
                  }}
                ></span>{" "}
                <span>{props.name}</span>
              </h1>
            ) : (
              <h1 className=" white big-h">
                {" "}
                Digital Agency That Thrives on Your Success
              </h1>
            )}
          </div>
          {!props.name && (
            <div className="banner-inner-1">
              <div className="banner-inner-1-text-1"></div>
              <div className="banner-inner-1-text-2">
                If you are looking for an agency to help you create a remarkable
                presence online, you’ve come to the right place. We can help you
                take your business to the next level.
              </div>
            </div>
          )}

          {!props.name && (
            <div className="banner-inner-2">
              <Link to="/services">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  className="white"
                >
                  <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                </svg>{" "}
                &nbsp; &nbsp;
                <span>See our services</span>
              </Link>
            </div>
          )}
        </div>
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" id="closeNavButton">
            ×
          </a>
          <div class="overlay-content">
            <Link to="/" className="nav-link-2" id="n-h-2">
              HOME
            </Link>
            <Link to="/services" className="nav-link-2" id="n-s-2">
              SERVICES
            </Link>
            <Link to="/about" className="nav-link-2" id="n-a-2">
              ABOUT
            </Link>
            <Link to="/contact" className="nav-link-2" id="n-c-2">
              CONTACT
            </Link>
          </div>
        </div>
      </header>{" "}
    </>
  );
}

export default Header;
