/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import {Link} from "react-scroll"

const HomeNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    
    {
      text: "Language",
      icon: <InfoIcon />,
    },
    {
      text: "Sign in",
      icon: <CommentRoundedIcon />,
    },

  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <p className="logo">Group Pay</p>
      </div>
      <div className="navbar-links-container">
      {/* <Link to="AboutQatta" spy={true} smooth={true} offset={-400} duration={700}>About</Link> */}
      <Link to="HowItWorks" spy={true} smooth={true} offset={-200} duration={700}>How it works</Link>
      {/* <Link to="Features" spy={true} smooth={true} offset={-200} duration={700}>Features</Link> */}
      <Link to="HomePageOrganizer" spy={true} smooth={true} offset={-200} duration={700}>Virtual Card</Link>
    
        <button className="primary-button">Contact</button>
 
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >

          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default HomeNavbar;
