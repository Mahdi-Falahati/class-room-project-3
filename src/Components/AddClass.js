import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
//import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";

import { useState } from "react";

export default function AddClass({ title, Organization }) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  const handleAddClass = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{ width: "280px", borderRadius: "15px", letterSpacing: "2px" }}
        // endIcon={<PersonAddIcon />}
        onClick={handleClickOpen}
      >
        {title}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          {title} <GroupAddIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          <TextField
            autoFocus
            onChange={handleTerm}
            value={term}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <Typography variant="overline" display="block" gutterBottom>
            {Organization}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddClass}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
