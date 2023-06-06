import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteBtn from "./DeleteBtn";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DialogEditClass from "./DialogEditClass";

export default function ClassInfo({ Name, user }) {
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
          <CastForEducationIcon sx={{ color: "gray", fontSize: "2rem" }} />{" "}
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
        <DialogEditClass title={Name} user={user} />
      </ListItem>
      <Divider variant="inset" sx={{ mt: "1rem" }} />
    </Box>
  );
}
