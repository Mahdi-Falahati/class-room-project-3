import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteBtn from "./DeleteBtn";

export default function InfoContent({ Name, AvatarSrc = "",}) {
  return (
    <Box sx={{ m: 2 }}>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: 360,
        }}
      >
        <ListItemAvatar>
          <Avatar alt={Name} src={AvatarSrc} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <>
              <Typography
                sx={{
                  display: "inline",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: "16px",
                  color: "#666",
                }}
                component="span"
                variant="overline"
                color="text.primary"
              >
                {Name}
              </Typography>
            </>
          }
        />
        {/* ------ delete btn */}
        <DeleteBtn />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
}
