import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Owner() {
  const defaultProps = {
    options: Organistion,
    getOptionLabel: (option) => option,
  };

  const organistionValueHandler = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Autocomplete
            onChange={organistionValueHandler}
            sx={{ padding: "10px", width: "280px" }}
            {...defaultProps}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Organization" variant="standard" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ background: "gold" }}>
          xs=8
        </Grid>
      </Grid>
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
