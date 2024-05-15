import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Typography, Button } from "@mui/material";
import { TextContentOne } from "../assets/contents/TextContentOne";
import { useLanguage } from "../assets/LanguageContext";
import TextContentOneEnglish from "../assets/contents/TextContentOneEnglish";
import ContentHeading from "../assets/contents/ContentHeading";
import ContentHeadingEnglish from "../assets/contents/ContentHeadingEnglish";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "165vh",
    margin: "3rem",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    textAlign: "left",
  },
}));

const ContentOne = () => {
  const classes = useStyles();
  const { language } = useLanguage();
  return (
    <>
      <Box  sx={{m:5, background: "white" }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { md: "2rem", sm: "1.5rem", xs: ".9rem" } }}
        >
          {language === "ml" ? <ContentHeading /> : <ContentHeadingEnglish />}
        </Typography>
        {/* <TextContentOne/> */}
        {language === "ml" ? <TextContentOne /> : <TextContentOneEnglish />}
      </Box>
    </>
  );
};

export default ContentOne;
