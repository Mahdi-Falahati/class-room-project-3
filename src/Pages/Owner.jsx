import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import OwnerContent from "./OwnerContent";

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
      <SubHeader user="Admin" />
      <SelectOptions user={"Admin"} />
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
