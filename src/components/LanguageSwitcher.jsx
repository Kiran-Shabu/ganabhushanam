import React from "react";
import { useLanguage } from "../assets/LanguageContext";
import { Button } from "@mui/material";


const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const buttonStyle = {
    backgroundColor: '#4CAF50', // Your desired background color
    color: '#FFFFFF', // Your desired text color
    '&:hover': {
      backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Gradient change on hover
    },
  };
  return (
    <div>
        <Button color="inherit" variant="contained" size="small" onClick={toggleLanguage} 
        sx={{backgroundColor: '#4CAF50',
        backgroundImage: 'linear-gradient(90deg, #4CAF50, #64DD17)', // Gradient background
        transition: 'background-image 0.3s ease', // Add transition effect
        '&:hover': {
          backgroundImage: 'linear-gradient(45deg, #64DD17, #4CAF50)', // Gradient background on hover
        }, 
          }} >
        {language === "ml" ? "Switch to English" : "മലയാളത്തിലേക്ക് മാറുക"}</Button>
    </div>
  );
};

export default LanguageSwitcher;
