import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import { useReducer, useState } from "react";
import { Autocomplete, Typography } from "@mui/material";
import style from "./btn.module.css";

export default function DialogEditClass({ Organization = "aaa", title }) {
  const [open, setOpen] = useState(false);
  const Title = title ? title : "";

  const [value, setValue] = useState(teacherFake[0]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({
    classTitle: false,
    teacher: false,
  });

  // ---------------reduser
  const ActionType = {
    ClassTitle: "__ClassTitle",
    Teacher: "__Teacher",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case ActionType.ClassTitle:
        return { ...state, classTitle: action.value };
      case ActionType.Teacher:
        return { ...state, teacher: action.value };
      default:
        break;
    }
  };

  const initialValue = {
    classTitle: Title,
    teacher: "",
  };
  const [data, dispatchInputData] = useReducer(formReducer, initialValue);

  const classTitleHandler = (e) => {
    dispatchInputData({ type: ActionType.ClassTitle, value: e.target.value });
  };
  const selectTeacherHandler = (e, newValue) => {
    setValue(newValue);
    console.log(e.target.value);
    dispatchInputData({ type: ActionType.Teacher, value: newValue });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClass = () => {
    if (data.classTitle.trim() && data.teacher) {
      setError({ classTitle: false, teacher: false });
      setOpen(false);
    } else if (!data.classTitle.trim()) {
      setError({ classTitle: true, teacher: false });
    } else if (!data.teacher) {
      setError({ classTitle: false, teacher: true });
    } else {
      setError({ classTitle: false, teacher: false });
      setOpen(false);
    }
  };
  const defaultPropsTeacher = {
    options: teacherFake,
    getOptionLabel: (option) => option,
  };

  return (
    <div>
      <Button
        color="secondary"
        className={style.editBtn}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Edit Class
          <EditIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={classTitleHandler}
            error={error.classTitle}
            value={data.classTitle}
            autoFocus
            margin="dense"
            id="classTitle"
            label="title"
            type="string"
            fullWidth
            variant="standard"
          />
          <Autocomplete
            value={value}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            onChange={(e, newValue) => selectTeacherHandler(e, newValue)}
            sx={{ mb: 1, width: "280px" }}
            {...defaultPropsTeacher}
            id="auto-highlight-teacher"
            autoHighlight
            renderInput={(params) => (
              <TextField
                error={error.teacher}
                {...params}
                label="Teacher"
                variant="standard"
              />
            )}
          />

          <Typography variant="overline" display="block" gutterBottom>
            org: {Organization}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditClass}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const teacherFake = ["T111", "T222", "T333"];
