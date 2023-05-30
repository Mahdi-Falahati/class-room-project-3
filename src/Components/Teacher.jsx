import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Teacher() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12} sx={{ minHeight: "97vh" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mb: 4,
          }}
        >
          
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
        </Grid>
      </Grid>
    </Box>
  );
}