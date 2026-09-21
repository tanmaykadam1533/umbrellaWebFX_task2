import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#d8eef3",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" color="black">
          E Decor
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit">Furniture</Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">About</Button>
        </Box>

        <Button variant="contained">
          Shop Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;