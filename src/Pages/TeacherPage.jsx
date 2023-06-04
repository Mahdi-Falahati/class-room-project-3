import Box from "@mui/material/Box";
import SubHeader from "./SubHeader";
import SelectOptions from "./SelectOptions";

export default function Teacher() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="teacher" />
      <SelectOptions user="teacher" />
    </Box>
  );
}

const Organistion = ["APS", "Youtube", "Google"];
const Classes = ["APS-3a", "APS-3b", "APS-3c", "APS-3e"];
