import React from "react";
import $ from "jquery";
import { Link } from 'react-router-dom';
import { resume } from "./PDF/Aditya_khowal_resume.pdf";

class Navbar extends React.Component {
  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document.querySelector(".navbar-expand-md").classList.add("navbar-reduce");
        document.querySelector(".navbar-expand-md").classList.remove("navbar-trans");
      } else {
        document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
        document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce");
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function(e) {
      e.preventDefault();
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        const target = $(this.hash);
        const targetElement = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (targetElement.length) {
          $("html, body").animate(
            {
              scrollTop: targetElement.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href={resume}>Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="https://adityakhowalgithub.github.io/nodeWEBsite/" target="_blank" rel="noopener noreferrer">
                  New Website (in development)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

