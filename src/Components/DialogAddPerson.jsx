import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";

import { useReducer, useState } from "react";

export default function DialogAddPerson({ title, Organization, Class, icon }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [multipleValue, setMultipleValue] = useState([]);
  const [data, dispatchInputData] = useReducer(formReducer, initialValue);
  const [error, setError] = useState({
    username: false,
    password: false,
    confrimPassword: false,
  });
  const [errorAdd, setErrorAdd] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    setOpen2(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleUserName = (e) => {
    dispatchInputData({
      type: ActionType.UserName,
      value: e.target.value,
    });
  };
  const passwordHandler = (e) => {
    dispatchInputData({
      type: ActionType.Password,
      value: e.target.value,
    });
  };
  const confirmPasswordHandler = (e) => {
    dispatchInputData({
      type: ActionType.ConfrimPassword,
      value: e.target.value,
    });
  };

  const handleNewPerson = () => {
    if (
      data.confrimPassword.trim() &&
      data.userName.trim() &&
      data.password.trim()
    ) {
      setError({ username: false, password: false, confrimPassword: false });
      setOpen(false);
    } else if (!data.userName.trim()) {
      setError({ ...error, username: true });
    } else if (!data.password.trim()) {
      setError({ ...error, username: false, password: true });
    } else {
      setError({ username: false, password: false, confrimPassword: true });
    }
  };

  const handlePersons = (e) => {
    const value = e.target.innerText.trim();
    const existItem = multipleValue.includes(value);

    if (existItem) {
      const newState = multipleValue.filter((item) => item !== value);
      setMultipleValue(newState);
    } else {
      setMultipleValue([...multipleValue, value]);
    }
  };

  const handleAddPerson = () => {
    if (multipleValue.length > 0) {
      setErrorAdd(false);
      setOpen(false);
    } else {
      setErrorAdd(true);
    }
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button
        variant="outlined"
        sx={{ width: "280px", borderRadius: "15px", letterSpacing: "2px" }}
        endIcon={icon}
        onClick={handleClickOpen}
      >
        Add {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Add {title}
          <GroupAddIcon sx={{ marginLeft: "5px" }} />
          <Button
            sx={{
              mx: 2,
              border: "none",
              borderBottom: "1px dotted",
              borderRadius: "0px",
              fontSize: "12px",
            }}
            endIcon={icon}
            onClick={handleClickOpen2}
          >
            New {title}
          </Button>
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          {/* -------------------------------------------- username */}
          <Autocomplete
            multiple
            onChange={handlePersons}
            id="tags-standard"
            options={["first", "secound"]}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                error={errorAdd}
                {...params}
                variant="standard"
                label={title}
                placeholder="Selected"
              />
            )}
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

      {/* -------------------------------------------- new */}

      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          New {title}
          <GroupAddIcon sx={{ marginLeft: "5px" }} />
          <Button
            sx={{
              mx: 2,
              border: "none",
              borderBottom: "1px dotted",
              borderRadius: "0px",
              fontSize: "12px",
            }}
            endIcon={icon}
            onClick={handleClickOpen}
          >
            Add {title}
          </Button>
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          {/* -------------------------------------------- username */}
          <TextField
            autoFocus
            error={error.username}
            onChange={handleUserName}
            value={data.userName}
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* -------------------------------------------- password */}
          <TextField
            onChange={passwordHandler}
            error={error.password}
            required
            fullWidth
            value={data.password}
            id="Password"
            label="Password"
            variant="standard"
          />
          {/*-------------------------------------------- confirm pasword */}
          <TextField
            onChange={confirmPasswordHandler}
            error={error.confrimPassword}
            required
            fullWidth
            value={data.confrimPassword}
            id="Password"
            label="ConfirmPassword"
            variant="standard"
          />
          <Typography variant="overline" display="block" gutterBottom>
            {Organization} - {Class}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleNewPerson}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const ActionType = {
  UserName: "__UserName",
  Password: "__Password",
  ConfrimPassword: "ConfrimPassword",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UserName:
      return { ...state, userName: action.value };
    case ActionType.Password:
      return { ...state, password: action.value };
    case ActionType.ConfrimPassword:
      return { ...state, confrimPassword: action.value };
    default:
      break;
  }
};

const initialValue = {
  userName: "",
  password: "",
  confrimPassword: "",
};
