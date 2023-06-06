import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssistantIcon from "@mui/icons-material/Assistant";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { Typography } from "@mui/material";
import style from "./btn.module.css";

export default function DialogEditClass({ Organization, Class, title }) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState(title ? title : "");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  const handleAssignGradeToHomeWrok = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="secondary"
        className={style.editBtn}
        onClick={handleClickOpen}
      >
        {title ? <EditIcon /> : <AssignmentTurnedInIcon />}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Edit Class
          <AssistantIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>
        <DialogContent>
          {/* ---------------- if edit Homework , titleHw === "" */}
          {!title ? (
            ""
          ) : (
            <TextField
              autoFocus
              onChange={handleTerm}
              value={term}
              margin="dense"
              id="name"
              label="title"
              type="string"
              fullWidth
              variant="standard"
            />
          )}

          <Typography variant="overline" display="block" gutterBottom>
            {Organization} - {Class}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAssignGradeToHomeWrok}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
