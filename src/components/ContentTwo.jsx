import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import TextContentTwo from "../assets/contents/TextContentTwo";
import TextContentTwoEnglish from "../assets/contents/TextContentTwoEnglish";
import { useLanguage } from "../assets/LanguageContext";
import ContentHeading from "../assets/contents/ContentHeading";
import ContentHeadingEnglish from "../assets/contents/ContentHeadingEnglish";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "110vh",
    margin: "3rem",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    textAlign: "left",
  },
}));

const ContentTwo = () => {
  const classes = useStyles();

  const { language } = useLanguage();

  return (
    <>
      <Box sx={{m:5, background: "white" }}>
        {/* <Typography
          variant="h3"
          sx={{ fontSize: { md: "2rem", sm: "1.5rem", xs: ".9rem" } }}
        >
          {language === "ml" ? <ContentHeading /> : <ContentHeadingEnglish />}
        </Typography> */}
        {/* <TextContentTwo/> */}
        {language === "ml" ? <TextContentTwo /> : <TextContentTwoEnglish />}
      </Box>
    </>
  );
};

export default ContentTwo;
