import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const TextContentOneEnglish = () => {
  return (
    <Box  sx={{ display: 'flex', mt:5, flexDirection: { xs: 'column', md: 'row' }}}>
    <Box sx={{
        m:1,
  flex: 1,
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: { xs: '1rem', md: '2rem' },
  background: ' #FFFFFF', // Black to gray to white gradient
  borderRadius: '6px',
  boxShadow: '0px 4px 6px rgba(3, 3, 3, 0.3)', // Add box shadow
}}>
<Typography sx={{
    fontSize: { lg: "1rem", md: ".8rem", sm: ".7rem", xs: ".7rem" },
    color: '#000',
    textAlign: { xs: 'justify', md: 'justify' }, // Center on mobile, left on larger screens
  }}>
    <span style={{ fontWeight: "bold" }}>Details for Participants:</span>
       <br />
       <br />
       1. All participants can sing any song in any language that SPB has sung.
       Solo performances are allowed. <br />
       2. Age limit for participants: 5 years and above. <br />
       3.Both men and women can participate in the competition.
       <br />
       4.Participants must prepare and sing two songs that SPB has sung. <br />
       5.Karaoke tracks for the chosen songs should be submitted. <br />
       6.Participants cannot refer to the lyrics while singing.
       <br />
       7.Judges will select winners in the first round, and the final decision
       will be made in the second round.
       <br />
       8.The competition starts at 8:00 AM with a break from 10:00 AM to 11:00
       AM. It resumes from 11:00 AM to 5:00 PM. The grand finale and award
      ceremony will be held on July 21st at 5:00 PM at Kollam C. Kesavan
      Memorial Town Hall. Noted music director Sri Sharath will conduct the
      event. <br />
  </Typography>
    </Box >
  <Box sx={{
    m:1,
  flex: 1,
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: { xs: '1rem', md: '2rem' },
  background: ' #FFFFFF', // Black to gray to white gradient
  borderRadius: '10px',
  boxShadow: '0px 4px 6px rgba(3, 3, 3, 0.3)', // Add box shadow
}}>
    
<Typography  sx={{
    fontSize: { lg: "1rem", md: ".8rem", sm: ".7rem", xs: ".7rem" },
    color: '#000',
    textAlign: { xs: 'justify', md: 'justify' }, // Center on mobile, left on larger screens
    // justifyContent :"flex-end"
  }}>
    <span style={{ fontWeight: "bold" }}>Registration Details:</span> <br />
       <br />
       <span style={{ fontWeight: "bold" }}>Registration fee: ₹1000/-</span>{" "}
       <br />
       Early registration{" "}
       <span style={{ fontWeight: "bold" }}> (until the end of May): ₹800</span>
       <br />
       <br />
       <span style={{ fontWeight: "bold" }}>
         From June 1st to June 15th: ₹900/-
       </span>
       <br /> <br />
       <span style={{ fontWeight: "bold" }}>
         from June 16th to June 30th: ₹1000/-
       </span>
       <br />
       <br />
       Registration can be done through QR code or account number
       <br />
       <br />
       Lunch , tea and snacks will be arranged exclusively for the contesants{" "}
       <br />
       <span style={{ fontWeight: "bold" }}>
         First prize: ₹25,001/- and a certificate
         <br />
         Second prize: ₹15,001/- and a certificate <br />
         Third prize: ₹10,001/- and a certificate
       </span>
       <br />
      <br />
       Winners will also get a golden opportunity in the fields of cinema,
       television, or albums.
  </Typography>
  </Box >

  
</Box>

    // <Typography
    //   variant="paragraph"
    //   sx={{
    //     marginTop: "2rem",
    //     lineHeight: "2",
    //     fontSize: { lg: ".9rem", md: ".8rem", sm: ".7rem", xs: ".56rem" },
    //   }}
    // >
    //   🎵 on 07-07-2024, Sunday, at Kollam Sopanam Auditorium from 8:00 AM to
    //   5:00 PM <br />
    //   <br />
    //   <span style={{ fontWeight: "bold" }}>Details for Participants:</span>{" "}
    //   <br />
    //   <br />
    //   1. All participants can sing any song in any language that SPB has sung.
    //   Solo performances are allowed. <br />
    //   2. Age limit for participants: 5 years and above. <br />
    //   3.Both men and women can participate in the competition.
    //   <br />
    //   4.Participants must prepare and sing two songs that SPB has sung. <br />
    //   5.Karaoke tracks for the chosen songs should be submitted. <br />
    //   6.Participants cannot refer to the lyrics while singing.
    //   <br />
    //   7.Judges will select winners in the first round, and the final decision
    //   will be made in the second round.
    //   <br />
    //   8.The competition starts at 8:00 AM with a break from 10:00 AM to 11:00
    //   AM. It resumes from 11:00 AM to 5:00 PM. The grand finale and award
    //   ceremony will be held on July 21st at 5:00 PM at Kollam C. Kesavan
    //   Memorial Town Hall. Noted music director Sri Sharath will conduct the
    //   event. <br />
    //   <br />
    //   <span style={{ fontWeight: "bold" }}>Registration Details:</span> <br />
    //   <br />
    //   <span style={{ fontWeight: "bold" }}>Registration fee: ₹1000/-</span>{" "}
    //   <br />
    //   Early registration{" "}
    //   <span style={{ fontWeight: "bold" }}> (until the end of May): ₹800</span>
    //   <br />
    //   <br />
    //   <span style={{ fontWeight: "bold" }}>
    //     From June 1st to June 15th: ₹900/-
    //   </span>{" "}
    //   <br /> <br />
    //   <span style={{ fontWeight: "bold" }}>
    //     from June 16th to June 30th: ₹1000/-
    //   </span>{" "}
    //   <br />
    //   <br />
    //   Registration can be done through QR code or account number
    //   <br />
    //   <br />
    //   Lunch , tea and snacks will be arranged exclusively for the contesants{" "}
    //   <br />
    //   <span style={{ fontWeight: "bold" }}>
    //     First prize: ₹25,001/- and a certificate
    //     <br />
    //     Second prize: ₹15,001/- and a certificate <br />
    //     Third prize: ₹10,001/- and a certificate{" "}
    //   </span>
    //   <br />
    //   <br />
    //   Winners will also get a golden opportunity in the fields of cinema,
    //   television, or albums.
    // </Typography>
  );
};

export default TextContentOneEnglish;
