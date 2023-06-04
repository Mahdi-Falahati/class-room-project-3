import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";

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
      <SubHeader user="teacher" />
      <SelectOptions user="teacher" />
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
