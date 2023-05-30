import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StudentList from "./StudentList";

export default function Teacher() {
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
      <Grid container columns={12} sx={{ minHeight: "97vh" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            mb: 4,
          }}
        >
          <Box>
            <Autocomplete
              onChange={organistionValueHandler}
              sx={{ m: 1, width: "280px" }}
              {...defaultPropsOrganistion}
              id="auto-highlight"
              autoHighlight
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Organization"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              onChange={ClassesValueHandler}
              sx={{ m: 1, width: "280px" }}
              {...defaultPropsClasses}
              id="auto-highlight"
              autoHighlight
              renderInput={(params) => (
                <TextField {...params} label="Classes" variant="standard" />
              )}
            />
          </Box>
          <Button
            sx={{
              height: "40px",
              width: "220px",
              letterSpacing: "2px",
              fontWeight: "bold",
              mt: 3,
            }}
            variant="contained"
            endIcon={<AssignmentIcon />}
          >
            Home Work
          </Button>
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
          <StudentList/>
        </Grid>
      </Grid>
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
