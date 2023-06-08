import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, TextField } from "@mui/material";
import { forwardRef, useState, useContext, useReducer } from "react";
import { StoreContext } from "../Utils/Store/StoreContext";
import { createOrganization } from "../API/API";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogOrgan() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const { data, updateData } = useContext(StoreContext);

  const [newOrg, dispatchNewOrg] = useReducer(formReducer, initialValue);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    dispatchNewOrg({ type: "__Name", value: e.target.value });
    dispatchNewOrg({ type: "__Owner", value: data["_id"] });
  };

  // -----------create organ
  const createOrg = async (newOrg) => {
    const createOrgan = await createOrganization("/createorganization", {
      name: newOrg.name,
      owner: data["_id"],
    });
    // updateData(data);
  };
  // ------------------

  const handleAdd = () => {
    if (title.trim()) {
      setError(false);
      setOpen(false);
      createOrg(newOrg);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Add New Organ
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
          Add New Organ
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountBalanceIcon sx={{ mr: 1, my: 0.5 }} />
              <TextField
                error={error}
                onChange={handleChangeTitle}
                id="input-with-sx"
                label="Organ Name"
                variant="standard"
                sx={{ width: "230px" }}
              />
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

const formReducer = (state, action) => {
  switch (action.type) {
    case "__Name":
      return { ...state, name: action.value };
    case "__Owner":
      return { ...state, owner: action.value };
    default:
      break;
  }
};

const initialValue = {
  name: "",
  owner: "",
};
