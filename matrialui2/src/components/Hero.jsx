import { Box, Typography, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        height: "600px",
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        p: 8,
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box maxWidth="500px">
        <Typography
          variant="h2"
          color="white"
          gutterBottom
        >
          Modern Office Furniture Collection
        </Typography>

        <Typography color="white">
          Discover stylish furniture for modern spaces.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;