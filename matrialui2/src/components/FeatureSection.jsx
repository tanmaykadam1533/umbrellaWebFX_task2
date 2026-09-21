import {
  Grid,
  Typography,
  Button,
  Box
} from "@mui/material";

function FeatureSection({
  title,
  description,
  image,
  reverse
}) {
  return (
    <Grid
      container
      spacing={0}
      direction={reverse ? "row-reverse" : "row"}
      sx={{ my: 5 }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Box p={8}>
          <Typography variant="h3">
            {title}
          </Typography>

          <Typography sx={{ my: 3 }}>
            {description}
          </Typography>

          <Button variant="contained">
            Shop Now
          </Button>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default FeatureSection;