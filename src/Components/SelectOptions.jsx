import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import OwnerContent from "./OwnerContent";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function SelectOptions({ user }) {
  const { data, selectInfo, updateSelectInfo } = useContext(StoreContext);
  const [isOrgan, setIsOrgan] = useState(false);
  const [isClass, setIsClass] = useState(false);
  const [error, setError] = useState({
    organistion: true,
    classes: true,
  });
  const defaultPropsOrganistion = {
    options: data.organizations,
    getOptionLabel: (option) => option.name,
  };

  const Classes = [];
  data.organizations?.forEach((item) => {
    if (item.name === selectInfo.organ) {
      item.classes?.forEach((i) => {
        Classes.push(i);
      });
    }
  });

  const defaultPropsClasses = {
    options: Classes,
    getOptionLabel: (option) => option.name,
  };

  const organistionValueHandler = (e) => {
    if (e.target.innerText) {
      updateSelectInfo({ type: "organ", value: e.target.innerText });
      setIsOrgan(true);
      setError({ ...error, organistion: false });
    } else {
      updateSelectInfo({ type: "organ", value: "" });
      setError({ ...error, organistion: true });
      setIsOrgan(false);
      setIsClass(false);
    }
  };

  const ClassesValueHandler = (e) => {
    if (e.target.innerText) {
      updateSelectInfo({ type: "class", value: e.target.innerText });
      setIsClass(true);
      setIsOrgan(false);
      setError({ ...error, classes: false });
    } else if (!e.target.innerText && !isOrgan && isClass) {
      console.log("object");
      setIsOrgan(true);
      setIsClass(false);
      setError({ ...error, classes: true });
      updateSelectInfo({ type: "class", value: "" });
    } else if (!e.target.innerText && !isOrgan && !isClass) {
      setIsOrgan(false);
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
            alignItems: "center",
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
