import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Autocomplete, Box, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import ClassIcon from "@mui/icons-material/Class";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogClass() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [selectOrgan, setSelectOrgan] = useState("");

  const defaultProps = {
    options: [],
    getOptionLabel: (option) => option.title,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOragan = (e) => {
    setSelectOrgan(e.target.innerText);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Add New Class
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{ letterSpacing: "2px", fontSize: "16px", textAlign: "center" }}
        >
          Add New Class
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SchoolIcon sx={{ mr: 1, mt: 2 }} />
                <TextField
                  value={title}
                  onChange={handleChangeTitle}
                  id="input-with-sx"
                  label="Class Name"
                  variant="standard"
                  sx={{ width: "230px" }}
                />
              </Box>
              <Box sx={{ display: "flex", mt: 3, alignItems: "center" }}>
                <ClassIcon sx={{ mr: 1, mt: 2 }} />
                <Autocomplete
                  onChange={handleOragan}
                  sx={{ width: "230px" }}
                  {...defaultProps}
                  id="clear-on-escape"
                  clearOnEscape
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Organ"
                      variant="standard"
                      value={selectOrgan}
                    />
                  )}
                />
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
