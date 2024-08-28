/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
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
import { Link } from "react-scroll";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

const HomeNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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
    <nav className="w-full">
      <div className="container mx-auto flex items-center justify-between px-14 py-8">
        <p className="flex items-center text-white text-2xl font-bold">
          Group Pay
        </p>

        <div className="flex items-center space-x-4">
          {/* <Link to="AboutQatta" spy={true} smooth={true} offset={-400} duration={700} className="text-gray-700 hover:text-gray-900">About</Link> */}
          <Link
            to="HowItWorks"
            spy={true}
            smooth={true}
            offset={-200}
            duration={700}
            className="text-white hover:text-purple-600"
          >
            {t("How it works")}
          </Link>

          <Link
            to="HomePageOrganizer"
            spy={true}
            smooth={true}
            offset={-200}
            duration={700}
            className="text-white hover:text-purple-600"
          >
            {t("Virtual Card")}
          </Link>
          <Link
            to="ContactUs"
            spy={true}
            smooth={true}
            offset={-200}
            duration={700}
            className="text-white hover:text-purple-600"
          >
            {t("Contact Us")}
          </Link>

          <button
            className="text-white hover:text-purple-600"
            onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")}
          >
            {i18n.language === "ar" ? "EN" : "ع"}
          </button>
          {/* <div className="navbar-menu-container">
            <HiOutlineBars3
              className="text-gray-700 cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          </div> */}
        </div>
      </div>

      {/* <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <Divider />
        </Box>
      </Drawer> */}
    </nav>
  );
};

export default HomeNavbar;
