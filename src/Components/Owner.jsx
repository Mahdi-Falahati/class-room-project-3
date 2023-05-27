import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Owner() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12}>
        <Grid item xs={12} sm={4}>
         
        </Grid>
        <Grid item xs={12} sm={8} sx={{ background: "gold" }}>

        </Grid>
      </Grid>
    </Box>
  );
}