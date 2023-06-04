import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function SubHeader({ user }) {
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
            ml: 3,
            mb: 3,
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
                alt={"Name"}
                src={"AvatarSrc"}
              />
            </ListItemAvatar>
            {user} : Nested List Items
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
