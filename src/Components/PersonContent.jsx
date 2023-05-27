import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

export default function PersonContent({ Name, AvatarSrc = "", ID }) {
  return (
    <Box id={ID}>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ListItemAvatar>
          <Avatar alt={Name} src={AvatarSrc} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <Box>
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
            </Box>
          }
        />
        <Button
          sx={{
            display: "flex",
            lineHeight: "30px",
            borderBottom: "1px solid",
            borderRadius: "0px",
          }}
          size="small"
          endIcon={<DeleteIcon />}
          color="secondary"
        >
          Delete
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
}
