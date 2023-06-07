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
    console.log(item);
    if (item.name === selectInfo.organ) {
      item.classes?.forEach((i) => {
        Classes.push(i);
      });
    }
console.log(Classes);  
});

  const Teachers = [];
  let count=0;
  Classes.forEach((item) => {

    if(item.teacher){
      count++;
    Teachers.push({
      username: item.teacher.username?item.teacher["username"]:"",
      id: item.teacher?item.teacher["_id"]:"",
    });
  }
    console.log(Teachers);
    console.log(count);
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
              Name={info.username}
              ID={info.id}
            />
          ))}
        </Grid>
      </Grid>
    </List>
  );
}
