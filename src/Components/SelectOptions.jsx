import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import OwnerContent from "./OwnerContent";
import { useState } from "react";

export default function SelectOptions({ user }) {
  const [isOrgan, setIsOrgan] = useState(false);
  const [isClass, setIsClass] = useState(false);
  const [error, setError] = useState({
    organistion: true,
    classes: true,
  });

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
    if (e.target.innerText) {
      setIsOrgan(true);
      setIsClass(false);
      setError({ ...error, organistion: false });
    } else {
      setError({ ...error, organistion: true });
      setIsOrgan(false);
    }
  };

  const ClassesValueHandler = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText) {
      setIsClass(true);
      setIsOrgan(false);
      setError({ ...error, classes: false });
    } else {
      setIsOrgan(true);
      setIsClass(false);
      setError({ ...error, classes: true });
    }
  };

  return (
    <Grid container columns={12} sx={{ minHeight: "97vh" }}>
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          <Autocomplete
            onChange={organistionValueHandler}
            sx={{ mb: 1, width: "280px" }}
            {...defaultPropsOrganistion}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField
                error={error.organistion}
                {...params}
                label="Organization"
                variant="standard"
              />
            )}
          />

          <Autocomplete
            onChange={ClassesValueHandler}
            sx={{ m: 2, width: "280px" }}
            {...defaultPropsClasses}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField
                error={error.classes}
                {...params}
                label="Classes"
                variant="standard"
              />
            )}
          />
          {/* } */}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            pl: "5px",
          }}
        >
          <OwnerContent user={user} isOrgan={isOrgan} isClass={isClass} />
        </Grid>
      </Box>
    </Grid>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
