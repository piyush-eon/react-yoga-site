import React, { useState } from "react";
import "./Header.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";
import { Menu, MenuItem } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { info, links } from "../../data/DummyData";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    const menuLinks = document.querySelector(".menuLinks");
    const line1 = document.querySelector("#line1");
    const line2 = document.querySelector("#line2");
    const line3 = document.querySelector("#line3");
    const background = document.querySelector(".background");

    if (nav) {
      menuLinks.style.cssText = "right:100%; transition:all 0.5s;";
      line1.style.cssText = "transform:rotate(0deg);";
      line2.style.cssText = "transform:rotate(-0deg);";
      line3.style.cssText = "display:block;";
      background.style.cssText = "transform:scale(0);";
    } else {
      menuLinks.style.cssText = "right:0%; transition:all 0.5s;";
      line1.style.cssText = "transform:rotate(45deg);";
      line2.style.cssText = "transform:rotate(-45deg); margin-top:-7px;";
      line3.style.cssText = "display:none;";
      background.style.cssText = "transform:scale(50);";
    }
    setNav(!nav);
  };

  return (
    <>
      <div className="background"></div>

      <div className="nav">
        <div className="brand">
          <a href="/#" className="logo">
            {info.title}
          </a>
        </div>

        <div className="links">
          <span className="menu" onClick={handleMenu}>
            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
          </span>

          <ul className="menuLinks">
            <li onClick={nav ? handleMenu : () => {}}>
              <a href="/#">Home</a>
            </li>
            <li onClick={nav ? handleMenu : () => {}}>
              <a href="/#classes">Live Classes</a>
            </li>
          </ul>
          <div
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="contact"
          >
            <PhoneAndroidIcon />
          </div>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <a href={links.fb}>
                <FacebookIcon />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href={links.insta}>
                <InstagramIcon />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href={links.youtube}>
                <YouTubeIcon />
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href={links.website}>
                <LanguageIcon />
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
