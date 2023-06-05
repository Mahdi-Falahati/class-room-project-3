import DialogAddPerson from "./DialogAddPerson";
import { Grid, List } from "@mui/material";
import InfoContent from "./InfoContent";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function TeachersList({ user }) {
  const deleteHandler = (id) => {
    console.log(fakeData.filter((person) => person.id !== id));
  };

  return (
    <List>
      <Grid container columns={12}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <DialogAddPerson
            title="Teacher"
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
          {fakeData?.map((info, index) => (
            <InfoContent
              key={index}
              OnDelete={deleteHandler}
              Name={info.name}
              ID={info.id}
            />
          ))}
        </Grid>
      </Grid>
    </List>
  );
}

const fakeData = [
  { name: "Teachers", id: "1" },
  { name: "Mahdi", id: "2" },
  { name: "Fateme", id: "3" },
  { name: "Zahra", id: "4" },
  { name: "Vesal", id: "5" },
];
