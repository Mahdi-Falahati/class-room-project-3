import { Grid, List } from "@mui/material";
import HomeworkInfo from "./HomeworkInfo";
import DialogAddHomework from "./DialogAddHomeWork";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function HomeworkList({ user }) {
  const deleteHandler = (id) => {};
  const { data, selectInfo } = useContext(StoreContext);

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
          {fakeHw?.map((info, index) => (
            <HomeworkInfo
              key={index}
              OnDelete={deleteHandler}
              Name={info.name}
              ID={info.id}
              user={user}
            />
          ))}
        </Grid>
      </Grid>
    </List>
  );
}

const fakeHw = [
  { name: "h1", id: "1" },
  { name: "hmw2", id: "2" },
  { name: "hw3", id: "3" },
  { name: "hw555", id: "4" },
  { name: "hw666", id: "5" },
];
