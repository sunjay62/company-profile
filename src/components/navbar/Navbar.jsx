import React, { Component } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BusinessIcon from "@mui/icons-material/Business";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

class Navbar extends Component {
  state = {
    clicked: false,
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ isScrolled: false });

    // Scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { isScrolled, prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const scrollThreshold = 20;

    if (currentScrollPos === 0) {
      this.setState({ isScrolled: false });
    } else if (currentScrollPos > prevScrollPos && !isScrolled) {
      this.setState({ isScrolled: true });
    } else if (
      currentScrollPos < prevScrollPos &&
      isScrolled &&
      currentScrollPos > scrollThreshold
    ) {
      this.setState({ isScrolled: false });
    }

    this.setState({ prevScrollPos: currentScrollPos });
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let offset = 0; // Set the offset to 0 to scroll to the top

      if (id === "about") {
        offset = 50; // Offset 400 for the contact section
      }
      if (id === "contact") {
        offset = -400; // Offset 400 for the contact section
      }
      if (id === "business") {
        offset = -10; // Offset 150 for the business section
      }
      if (id === "home") {
        window.scrollTo({
          top: 0, // Scroll to the top
          behavior: "smooth",
        });
        return; // Exit the function after scrolling to the top
      }

      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  render() {
    const { clicked, isScrolled } = this.state;

    const menuItems = [
      {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: <HomeIcon />,
      },
      {
        title: "About Us",
        url: "#about",
        cName: "nav-links",
        icon: <InfoIcon />,
      },
      {
        title: "Business",
        url: "#business",
        cName: "nav-links",
        icon: <BusinessIcon />,
      },
      {
        title: "Contact Us",
        url: "#contact",
        cName: "nav-links",
        icon: <PermContactCalendarIcon />,
      },
    ];

    return (
      <>
        <nav className={isScrolled ? "navbarItems scrolled" : "navbarItems"}>
          <h1 className="navbar-logo">
            Remala<span>Group</span>
          </h1>

          <div className="menu-icons" onClick={this.handleClick}>
            {clicked ? <CloseIcon /> : <MenuIcon />}
          </div>

          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              let offset = 50; // Default offset 50
              if (item.title === "Contact Us") {
                offset = -400; // Offset 150 untuk bagian contact
              }
              if (item.title === "Business") {
                offset = 5; // Offset 150 untuk bagian contact
              }

              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.url}
                    onClick={
                      item.title === "About Us"
                        ? () => this.scrollToSection("about")
                        : item.title === "Business"
                        ? () => this.scrollToSection("business")
                        : item.title === "Contact Us"
                        ? () => this.scrollToSection("contact")
                        : item.title === "Home"
                        ? () => this.scrollToSection("home")
                        : null
                    }
                  >
                    {item.icon && <div className="menu-icon">{item.icon}</div>}
                    <div className="menu-title">{item.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
