import { Grid, List } from "@mui/material";
import PersonInfo from "./InfoContent";
import DialogAddClass from "./DialogAddClass";

export default function ClassesList() {
  const deleteHandler = (id) => {};

  return (
    <List>
      <Grid container columns={12}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <DialogAddClass />
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
          {fakeClasses?.map((info, index) => (
            <PersonInfo
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

const fakeClasses = [
  { name: "htm", id: "1" },
  { name: "css", id: "2" },
  { name: "js", id: "3" },
  { name: "react", id: "4" },
  { name: "redux", id: "5" },
];
