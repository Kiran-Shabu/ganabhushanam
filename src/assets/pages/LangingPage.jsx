import React, { useState } from "react";
import { Box, Typography, MenuItem, Select } from "@mui/material";
import ContentOne from "../../components/ContentOne";
import ParallaxOne from "../../components/ParallaxOne";
import ContentTwo from "../../components/ContentTwo";
import ParallaxTwo from "../../components/ParallaxTwo";
import ParallaxThree from "../../components/ParallaxThree";

const LandingPage = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ m: -1, p: 0 }}>
      <ParallaxOne />
      <ContentOne />
      <ParallaxTwo />
      <ContentTwo />
      <ParallaxThree />
      <Box style={{ height: "100px", background: "red" }}>
        <Typography>helloo</Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
