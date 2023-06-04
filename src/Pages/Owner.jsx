import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import OwnerContent from "../Components/OwnerContent";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";
import { useState } from "react";

export default function Owner() {
  const [isOrgan, setIsOrgan] = useState(false);
  const [isClass, setIsClass] = useState(false);
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
    } else {
      setIsOrgan(false);
    }
  };

  const ClassesValueHandler = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText) {
      setIsClass(true);
      setIsOrgan(false);
    } else {
      setIsOrgan(true);
      setIsClass(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="Admin" />
      <SelectOptions user={"Admin"} />
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
