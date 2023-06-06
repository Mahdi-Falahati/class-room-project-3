import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DialogAsignHomeWork from "./DialogAsignHomeWork";
import DeleteBtn from "./DeleteBtn";
import CheckBtn from "./CheckBtn";

export default function HomeworkInfo({ Name, ID, user }) {
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
          <AssignmentIcon sx={{ color: "gray" }} />
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
          {/* ---------------------------------------------------- if user is student or not student */}
          {user !== "student" ? (
            <>
              {/* ---------- delete btn */}
              <DeleteBtn ID={ID} />
              {/* --------------- edit btn */}
              <DialogAsignHomeWork
                Organization="APS"
                Class="APS3e"
                titleHw={Name}
                user={user}
              />
            </>
          ) : (
            //------------------------------------------- else if
            <>
              {/* ------------ check btn */}
              <CheckBtn />
            </>
            //--------------------------------------------- end if
          )}
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
}
