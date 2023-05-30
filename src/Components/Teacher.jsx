import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


export default function Teacher() {
  const defaultPropsOrganistion = {
    options: Organistion,
    getOptionLabel: (option) => option,
  };
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
          <Autocomplete
            sx={{ m: 1, width: "280px" }}
            {...defaultPropsOrganistion}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Organization" variant="standard" />
            )}
          />
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

const Organistion = ["APS", "Youtube", "Google"];
