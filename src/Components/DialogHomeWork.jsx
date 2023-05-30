import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { Autocomplete, Typography } from "@mui/material";

export default function DialogHomeWork({Organization, Class}) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");

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

  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  const homeworkValueHandler = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div>
      <Button
        color="secondary"
        sx={{
          display: "flex",
          lineHeight: "30px",
          borderBottom: "1px solid",
          borderRadius: "0px",
        }}
        endIcon={<AddCircleIcon />}
        onClick={handleClickOpen}
      >
        Add HomeWork
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Home Work</DialogTitle>
        <DialogContent>
          <Autocomplete
            onChange={homeworkValueHandler}
            sx={{ m: 1, width: "280px" }}
            {...defaultPropsHomeWork}
            id="auto-highlight"
            autoHighlight
            renderInput={(params) => (
              <TextField {...params} label="Home work" variant="standard" />
            )}
          />
          <TextField
            autoFocus
            onChange={handleTerm}
            value={term}
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
          <Button onClick={handleClose}>Assign</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Homework = ["Homework1", "Homework2", "Homework3"];
