import Student from "../Students";
import AddPerson from "./AddPerson";
import { Box, Grid, List } from "@mui/material";
import DialogAddHomeWork from "./DialogAddHomeWork";

export default function StudentList() {
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
            <AddPerson title="Add Student" Organization="APS" Class="APS3E" />
            <DialogAddHomeWork Organization="APS" Class="APS3E" />
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
            {fakeData?.map((info, index) => (
              <Student
                key={index}
                OnDelete={deleteHandler}
                Name={info.name}
                ID={info.id}
              />
            ))}
          </Grid>
        </Grid>
      </List>
    </Box>
  );
}

const fakeData = [
  { name: "RC", id: "1" },
  { name: "Mahdi", id: "2" },
  { name: "Fateme", id: "3" },
  { name: "Zahra", id: "4" },
  { name: "Vesal", id: "5" },
];
