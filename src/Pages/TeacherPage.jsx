import Box from "@mui/material/Box";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";

export default function Teacher() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="teacher" />
      <SelectOptions user="teacher" />
    </Box>
  );
}