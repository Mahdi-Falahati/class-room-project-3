import Box from "@mui/material/Box";
import SubHeader from "../Components/SubHeader";
import SelectOptions from "../Components/SelectOptions";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function Owner() {
  const { data } = useContext(StoreContext);
  console.log(data.organizations[0].classes);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SubHeader user="Admin" />
      <SelectOptions user={"Admin"} organizations={data.organizations} />
    </Box>
  );
}
