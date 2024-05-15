import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { lv } from "../assets";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const toggleDrawer = () => {
  };

  return (
      <AppBar
        position="fixed"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src={lv} alt="Logo" style={{ height: "55px" }} />
          </IconButton>

          {/* <Typography variant="h6" noWrap sx={{ display: { xs: 'none', md: 'block' } }}>
            Your Website
          </Typography> */}

          
       

          {/* Hamburger Menu Icon */}
          <Box sx={{ flexGrow: 1 }} />
          

          {/* Language Switcher */}
        
            <LanguageSwitcher />
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
