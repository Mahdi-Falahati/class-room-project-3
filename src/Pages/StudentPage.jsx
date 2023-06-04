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
