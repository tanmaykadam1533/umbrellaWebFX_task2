import { Box, Typography, Button } from "@mui/material";

function CTA() {
  return (
    <Box
      sx={{
        height: 350,
        borderRadius: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1600)",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          color="white"
        >
          Transform Your Living Space
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
        >
          Explore Collection
        </Button>
      </Box>
    </Box>
  );
}

export default CTA;