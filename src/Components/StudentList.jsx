import DialogAddPerson from "./DialogAddPerson";
import { Box, Grid, List } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InfoContent from "./InfoContent";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function StudentList() {
  const { data, selectInfo } = useContext(StoreContext);

  const Classes = [];
  data.organizations?.forEach((item) => {
    if (item.name === selectInfo.organ) {
      item.classes?.forEach((i) => {
        Classes.push(i);
      });
    }
  });

  const Students = [];
  Classes?.forEach((item) => {
    if (item.name === selectInfo.class) {
      item.students?.forEach((i) => {
        Students.push({
          userName: item.teacher.username,
          id: item.teacher["_id"],
        });
      });
    }
  });

  const deleteHandler = (id) => {
    console.log(fakeData.filter((person) => person.id !== id));
  };

  return (
    <Box sx={{ width: "100%", minHeight: "80vh" }}>
      <List>
        <Grid container columns={12}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <DialogAddPerson
              title="Student"
              Organization="APS"
              Class="APS3E"
              icon={<PersonAddIcon />}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              bgcolor: "background.paper",
            }}
          >
            {Students?.map((info, index) => (
              <InfoContent
                key={index}
                OnDelete={deleteHandler}
                Name={info.userName}
                ID={info.id}
              />
            ))}
          </Grid>
        </Grid>
      </List>
    </Box>
  );
}