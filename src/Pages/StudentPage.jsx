import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";
import { useState } from "react";

export default function StudentPage() {
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
      <SubHeader user="student" />
      <SelectOptions user={"student"} />
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
