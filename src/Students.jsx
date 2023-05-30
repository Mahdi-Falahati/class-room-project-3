import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

export default function Student({ Name, AvatarSrc = "",}) {
 
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
        
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
}
