import React, { Component } from "react";
import { motion } from "framer-motion";
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var letterA;
      if (
        city.toLowerCase().charAt(0) === "a" ||
        city.toLowerCase().charAt(0) === "e" ||
        city.toLowerCase().charAt(0) === "i" ||
        city.toLowerCase().charAt(0) === "o" ||
        city.toLowerCase().charAt(0) === "u"
      ) {
        letterA = "an";
      } else {
        letterA = "a";
      }
      var networks = this.props.data.social.map(function (network) {
        return (
          <motion.li
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            key={network.name}
          >
            <a href={network.url}>
              <motion.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3 }}
                className={network.className}
              ></motion.i>
            </a>
          </motion.li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <motion.a
                whileHover={{ scale: 1.2, color: "#F0601F" }}
                transition={{ duration: 0.1 }}
                className="smoothscroll"
                href="#home"
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2, color: "#F0601F" }}
                transition={{ duration: 0.1 }}
                className="smoothscroll"
                href="#about"
              >
                About
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2, color: "#F0601F" }}
                transition={{ duration: 0.1 }}
                className="smoothscroll"
                href="#resume"
              >
                Resume
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2, color: "#F0601F" }}
                transition={{ duration: 0.1 }}
                className="smoothscroll"
                href="#portfolio"
              >
                Works
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2, color: "#F0601F" }}
                transition={{ duration: 0.1 }}
                className="smoothscroll"
                href="#testimonials"
              >
                Testimonials
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2, color: "#F0601F" }}
                transition={{ duration: 0.1 }}
                className="smoothscroll"
                href="#contact"
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <motion.h1
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
              className="responsive-headline"
            >
              I'm {name}.
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3 }}
            >
              I'm {letterA} {city} based <span>{occupation}</span>.{" "}
              {description}.
            </motion.h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <motion.a
            whileHover={{ scale: 1.2 }}
            duration={0.3}
            className="smoothscroll"
            style={{ display: "flex", justifyContent: "center" }}
            href="#about"
          >
            <i className="icon-down-circle"></i>
          </motion.a>
        </p>
      </header>
    );
  }
}

export default Header;
