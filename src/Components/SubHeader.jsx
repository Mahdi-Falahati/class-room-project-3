import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BurgerMenu from "./BurgerMenu";
import { useContext } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";

export default function SubHeader({ user }) {
  const { data } = useContext(StoreContext);
  const subHeader = () => {
    return (
      <Grid container columns={12} sx={{ width: "95vw" }}>
        <Grid
          item
          columns={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: "0.5rem",
            ml: 3,
            mb: 3,
            width: "95vw",
          }}
        >
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              letterSpacing: "2px",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{ background: "purple" }}
                alt={data.username}
                src={"AvatarSrc"}
              />
            </ListItemAvatar>
            {data.username} ({user})
          </ListSubheader>
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "flex-end",
              alignItems: "center",
              letterSpacing: "2px",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            <BurgerMenu />
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
