import React from "react";
import { Typography, Box } from "@mui/material";
import { spb } from "../";

const TextContentTwoEnglish = () => {
  return (
    <Box sx={{mt:5,display: "flex",flexDirection: { xs: 'column', md: 'row' }, justifyContent:"space-between", alignItems:'center'}}>
      <Box sx={{m:1,flex:1,maxWidth:'27rem', height:"27rem", backgroundImage: 'linear-gradient(135deg,#100c0d, #65411d)', borderRadius:'50%',boxShadow: '0 0 20px rgba(0, 0, 0, .5)'}}>
        <Box sx={{m:1,flex:1,width:{xs:'20rem', md:"25rem"}, height:{xs:'20rem', md:"25rem"}, backgroundColor:"black", borderRadius:'50%',boxShadow: '0 0 20px rgba(0, 0, 0, 1)', position:"relative", overflow:"hidden"}}>
          <img style={{position:"absolute", objectFit:"cover"}} src={spb}/>
        </Box>
      </Box>
      <Box sx={{
        m:1,
  flex: 1,
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: { xs: '1rem', md: '2rem' },
  background: ' #FFFFFF', // Black to gray to white gradient


}}>
<Typography sx={{
    fontSize: { lg: ".9rem", md: ".8rem", sm: ".7rem", xs: ".7rem" },
    color: '#000',
    textAlign: { xs: 'justify', md: 'justify' }, // Center on mobile, left on larger screens
  }}>
    Dr. S. P. Balasubrahmanyam, the renowned playback singer, has been
      actively involved in philanthropic activities through the S. P.
      Balasubrahmanyam Foundation. For the past two years, the foundation has
      been distributing financial aid to artists in need. On July 21, the SPB
      Award Night was held at Vedika in Kollam, where artists from various
      fields were honored. Additionally, on June 2, the foundation collaborated
      with Thirunelveli Aravind Eye Hospital to organize a free eye care camp
      for students. During the upcoming academic year, textbooks and notebooks
      will be distributed to children as part of their compassionate
      initiatives. We extend a warm welcome to your organization to participate
      in this noble endeavor. On July 24, the SPB Pattu Music Competition will
      take place at the Kollam Sopanam Auditorium. Furthermore, on September 21,
      the SPB Award Night & Legends Voice Live in concert will be held at Kollam
      C. Kesavan Memorial Town Hall. Your organization’s contribution will be
      acknowledged in the second page of the Mathrubhumi daily newspaper, which
      has a circulation of over one lakh copies. Additionally, ACV Live Show in
      Kerala and online platforms such as Radio Benzy, social media, YouTube,
      Facebook, Instagram, Flex boards, brochures, passes, and program halls
      with LED screens will showcase your organization’s support. Let us join
      hands to make a positive impact in this great initiative.
  </Typography>
    </Box >
    </Box>

    
  );
};

export default TextContentTwoEnglish;
