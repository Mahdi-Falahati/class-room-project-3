import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { useState } from "react";

export default function DialogAddHomeWork({ Organization, Class }) {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [description, setDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTerm = (e) => {
    setTerm(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddHomeWork = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button
        variant="outlined"
        sx={{ width: "280px", borderRadius: "15px", letterSpacing: "2px" }}
        endIcon={<AddCircleIcon />}
        onClick={handleClickOpen}
      >
        Add HomeWork
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Add HomeWork <BorderColorIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          <TextField
            autoFocus
            onChange={handleTerm}
            value={term}
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            onChange={handleDescription}
            value={description}
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <Typography variant="overline" display="block" gutterBottom>
            {Organization} - {Class}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddHomeWork}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
