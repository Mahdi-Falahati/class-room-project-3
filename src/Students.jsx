import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import DialogHomeWork from "./Components/DialogHomeWork";

export default function Student({ Name, AvatarSrc = "", ID, OnDelete }) {
  const deleteHandler = (e) => {
    OnDelete(e.target.id);
  };

  return (
    <Box sx={{ m: 2 }}>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              display: "flex",
              lineHeight: "30px",
              borderBottom: "1px solid",
              borderRadius: "0px",
              mx: 3,
            }}
            size="small"
            endIcon={<DeleteIcon />}
            color="secondary"
            onClick={deleteHandler}
            id={ID}
          >
            Delete
          </Button>
          <DialogHomeWork Organization="APS" Class="APS3e"/>
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
}
