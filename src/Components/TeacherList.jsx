import DialogAddPerson from "./DialogAddPerson";
import { Grid, List } from "@mui/material";
import InfoContent from "./InfoContent";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function TeachersList({ user }) {
  const { data, selectInfo } = useContext(StoreContext);

  const Classes = [];
  data.organizations?.forEach((item) => {
    if (item.name === selectInfo.organ) {
      item.classes?.forEach((i) => {
        Classes.push(i);
      });
    }
  });

  const Teachers = [];
  let count=0;
  Classes.forEach((item) => {
    count++;
    console.log(count);
    console.log(item.teacher.username);
    Teachers.push({
      username: item.teacher.username?item.teacher["username"]:"",
      id: item.teacher?item.teacher["_id"]:"",
    });
    console.log(Teachers);
  });

  const deleteHandler = (id) => {
    console.log(Teachers.filter((person) => person.id !== id));
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
          {Teachers?.map((info, index) => (
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
  );
}
