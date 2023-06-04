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
import { Autocomplete, Typography } from "@mui/material";
import style from "./btn.module.css";

export default function DialogAsignHomeWork({ Organization, Class, titleHw }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);

  const defaultPropsHomeWork = {
    options: Homework,
    getOptionLabel: (option) => option,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const homeworkValueHandler = (e) => {
    console.log(e.target.innerText);
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
          Grade To Home Work
          <AssistantIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>
        <DialogContent>
          {/* ---------------- if edit Homework , titleHw === "" */}
          {!title ? (
            <Autocomplete
              autoFocus
              onChange={homeworkValueHandler}
              sx={{ m: 1, width: "280px" }}
              {...defaultPropsHomeWork}
              id="auto-highlight"
              autoHighlight
              renderInput={(params) => (
                <TextField {...params} label="Home work" variant="standard" />
              )}
            />
          ) : (
            // ---------------- if assign grade ,titleHw !==""
            <TextField
              onChange={handleTitle}
              value={title}
              margin="dense"
              id="name"
              label="title"
              type="string"
              fullWidth
              variant="standard"
            />
          )}

          <TextField
            autoFocus
            onChange={handleGrade}
            value={grade}
            margin="dense"
            id="name"
            label="Grade"
            type="number"
            fullWidth
            variant="standard"
          />
          <Typography variant="overline" display="block" gutterBottom>
            {Organization} - {Class}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAssignGradeToHomeWrok}>
            {titleHw ? "edit" : "Assign"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Homework = ["Homework1", "Homework2", "Homework3"];
