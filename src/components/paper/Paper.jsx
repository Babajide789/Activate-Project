import React from "react";
import { Box, Paper, Typography } from "@mui/material";



function SimplePaper() {
  const paperItems = [
    { title: "Getting Started", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Events", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Enrolment Payment", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Voting", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Talents", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Categories", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Shortlisting", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
    { title: "Prize Winning", content: "Lorem ipsum dolor sit amet consectetur.\nSit curabitur nulla justo tellus amet." },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
        gap: 4,
        padding: 4,
        width: 700,
        height: 300
        
      }}
    >
      {paperItems.map((item, index) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            backgroundColor: "#f3f3f5",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {item.content}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default SimplePaper;
