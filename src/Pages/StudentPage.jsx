import Box from "@mui/material/Box";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";

export default function StudentPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="student" />
      <SelectOptions user={"student"} />
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
