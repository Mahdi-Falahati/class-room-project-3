import * as React from "react";
import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function SubHeader({ user }) {
  const defaultPropsOrganistion = {
    options: Organistion,
    getOptionLabel: (option) => option,
  };

  const subHeader = () => {
    return (
      <Grid container columns={12}>
        <Grid
          item
          columns={2}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            paddingRight: "0.5rem",
          }}
        >
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <ListItemAvatar>
              <Avatar alt={"Name"} src={"AvatarSrc"} />
            </ListItemAvatar>
            {user} :Nested List Items
          </ListSubheader>
        </Grid>
      </Grid>
    );
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={subHeader()}
    ></List>
  );
}
const Organistion = ["APS", "Youtube", "Google"];
