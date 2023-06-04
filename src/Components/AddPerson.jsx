import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";

import { useState } from "react";

export default function AddPerson({ title, Organization, Class, icon }) {
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

  const handleAddPerson = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button
        variant="outlined"
        sx={{ width: "280px", borderRadius: "15px", letterSpacing: "2px" }}
        endIcon={icon}
        onClick={handleClickOpen}
      >
        {title}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          {title} <GroupAddIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          {/* -------------------------------------------- username */}

          <TextField
            autoFocus
            onChange={handleTerm}
            value={term}
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* -------------------------------------------- password */}
          <TextField
            // onChange={passwordHandler}
            required
            fullWidth
            // error={error.password}
            // value={data.password}
            id="Password"
            label="Password"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <PasswordIcon />
            //     </InputAdornment>
            //   ),
            // }}
            variant="standard"
          />
          {/*-------------------------------------------- confirm pasword */}
          <TextField
            // onChange={confirmPasswordHandler}
            required
            fullWidth
            // error={error.password}
            // value={data.password}
            id="Password"
            label="ConfirmPassword"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <PasswordIcon />
            //     </InputAdornment>
            //   ),
            // }}
            variant="standard"
          />
          <Typography variant="overline" display="block" gutterBottom>
            {Organization} - {Class}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddPerson}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
