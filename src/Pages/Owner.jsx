import Box from "@mui/material/Box";
import SubHeader from "./SubHeader";
import SelectOptions from "./SelectOptions";

export default function Owner() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="Admin" />
      <SelectOptions user={"Admin"} />
    </Box>
  );
}