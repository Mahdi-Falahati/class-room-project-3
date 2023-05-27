import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Owner() {
  const defaultPropsOrganistion = {
    options: Organistion,
    getOptionLabel: (option) => option,
  };

  const defaultPropsClasses = {
    options: Classes,
    getOptionLabel: (option) => option,
  };

  const organistionValueHandler = (e) => {
    console.log(e.target.innerText);
  };

  const ClassesValueHandler = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12} sx={{minHeight:"97vh"}}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent:"center"
          }}
        >
          <Autocomplete
            onChange={organistionValueHandler}
            sx={{ padding: "10px", width: "280px" }}
            {...defaultPropsOrganistion}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Organization" variant="standard" />
            )}
          />

          <Autocomplete
            onChange={ClassesValueHandler}
            sx={{ padding: "10px", width: "280px" }}
            {...defaultPropsClasses}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Classes" variant="standard" />
            )}
          />
          <Box>
            <Button
              sx={{
                color: "gray",
                borderBottom: "1px solid gray",
                borderRadius: "0px",
                mx:1
              }}
              size="large"
              endIcon={<ArrowCircleRightIcon />}
            >
              Teachers
            </Button>
            <Button
              sx={{
                color: "gray",
                borderBottom: "1px solid gray",
                borderRadius: "0px",
                mx:1
              }}
              size="large"
              endIcon={<ArrowCircleRightIcon />}
            >
              Students
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ background: "gold" }}>
          xs=8
        </Grid>
      </Grid>
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
