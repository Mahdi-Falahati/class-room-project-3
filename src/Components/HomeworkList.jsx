import { Grid, List } from "@mui/material";
import HomeworkInfo from "./HomeworkInfo";
import DialogAddHomework from "./DialogAddHomeWork";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function HomeworkList({ user }) {
  const deleteHandler = (id) => {};
  const { data, selectInfo } = useContext(StoreContext);

  const Classes = [];
  data.organizations?.forEach((item) => {
    if (item.name === selectInfo.organ) {
      item.classes?.forEach((i) => {
        Classes.push(i);
      });
    }
  });

  const Homeworks = [];
  Classes?.forEach((item) => {
    if (item.name === selectInfo.class) {
      item.students[0].homeworks.forEach((i) => {
        Homeworks.push({
          title: i.title,
          id: i["_id"],
          descrption: i.descrption,
        });
      });
    }
  });

  return (
    <List>
      <Grid container columns={12}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          {user === "student" ? <span>HomeWork</span> : <DialogAddHomework />}
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
          {Homeworks?.map((info, index) => (
            <HomeworkInfo
              key={index}
              OnDelete={deleteHandler}
              Name={info.title}
              ID={info.id}
              user={user}
            />
          ))}
        </Grid>
      </Grid>
    </List>
  );
}
