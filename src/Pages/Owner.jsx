import Box from "@mui/material/Box";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";

export default function Owner() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="Admin" />
      <SelectOptions user={"Admin"} />
    </Box>
  );
}