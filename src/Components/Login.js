import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/Password";

import { useState, useReducer } from "react";

export default function Login() {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [data, dispatchInputData] = useReducer(formReducer, initialValue);

  const userNameHandler = (e) => {
    dispatchInputData({ type: ActionType.UserName, value: e.target.value });
  };
  const passwordHandler = (e) => {
    dispatchInputData({ type: ActionType.Password, value: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    console.log(inputValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockPersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={data.userName}
                  onChange={userNameHandler}
                  required
                  fullWidth
                  id="UserName"
                  label="Email Address Or UserName"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={passwordHandler}
                  required
                  fullWidth
                  value={data.password}
                  id="Password"
                  label="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label="Who Are You" />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "15px", letterSpacing: "2px" }}
              endIcon={<LoginIcon />}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Class Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const options = ["Admin", "Teacher", "Student"];

const ActionType = {
  UserName: "__UserName",
  Password: "__Password",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UserName:
      return { ...state, userName: action.value };
    case ActionType.Password:
      return { ...state, password: action.value };
    default:
      break;
  }
};

const initialValue = {
  userName: "",
  password: "",
};
