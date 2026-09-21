import { Box, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs:12, md:3 }}>
          <Typography variant="h6">
            E Decor
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <Typography>Company</Typography>
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <Typography>Support</Typography>
        </Grid>

        <Grid size={{ xs:12, md:3 }}>
          <Typography>Newsletter</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;