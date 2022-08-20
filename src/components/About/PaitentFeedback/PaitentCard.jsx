import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const PaitentCard = (props) => {
  const { userId, feedback } = props.pat;

  return (
    <Stack direction="row" spacing={1}>
      <Stack direction="column" spacing={0} alignItems="center">
        <Avatar alt="Name" src="" sx={{ width: 86, height: 86 }} />
        <Box
          width={180}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ color: "#01D6A3" }}>
            {userId.name}
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: "white" }}>
          Paitent
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        component={"blockquote"}
        sx={{
          color: "white",
          backgroundColor: "#0F4553",
          px: 4,
          pb: 5,
          pt: 2,
        //   quotes: `\201C""\201D""\2018""\2019`,
          "&:after": {
            color: "#ccc",
            content: "close-quote",
            fontSize: "10em",
            lineHeight: ".1em",
            marginLeft: "0.25em",
            verticalAlign: "-0.4em",
          },
        }}
      >
        {feedback}
      </Typography>
    </Stack>
  );
};

export default PaitentCard;
