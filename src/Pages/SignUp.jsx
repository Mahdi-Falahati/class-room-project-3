import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/Password";
import { useState, useReducer, useContext } from "react";
import { Alert } from "@mui/material";
import { createOwner } from "../API/API";
import { StoreContext } from "../Utils/Store/StoreContext";
import { useAuth } from "../Utils/Auth";
import { useNavigate } from "react-router-dom";

export default function SignUp({ user }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const { updateData } = useContext(StoreContext);
  const [data, dispatchInputData] = useReducer(formReducer, initialValue);
  const [error, setError] = useState({
    username: false,
    password: false,
    confirmPassword: false,
    checkPassword: false,
    role: false,
  });

  const userNameHandler = (e) => {
    dispatchInputData({ type: ActionType.UserName, value: e.target.value });
  };
  const passwordHandler = (e) => {
    dispatchInputData({ type: ActionType.Password, value: e.target.value });
  };
  const confirmPasswordHandler = (e) => {
    dispatchInputData({
      type: ActionType.ConfirmPassword,
      value: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data.userName.trim() &&
      data.password.trim() &&
      data.confirmPassword.trim()
    ) {
      setError({
        username: false,
        password: false,
        role: false,
        confirmPassword: false,
      });
    } else if (!data.userName.trim()) {
      setError({ ...error, username: true });
    } else if (!data.password.trim()) {
      setError({ ...error, username: false, password: true });
    } else if (!data.confirmPassword.trim()) {
      setError({
        ...error,
        username: false,
        password: false,
        confirmPassword: true,
      });
    } else {
      setError({
        username: false,
        password: false,
        confirmPassword: false,
        role: true,
      });
    }
    if (data.confirmPassword !== "" && data.password !== data.confirmPassword) {
      setError({
        username: false,
        password: false,
        confirmPassword: true,
        checkPassword: true,
        role: true,
      });
    }
    if (data.password === data.confirmPassword) {
      getData(data);
    }
  };
  // --------------------------------get data and change page
  const changPage = (path, flag) => {
    auth.loggedIn(flag);
    navigate(path);
  };
  const getData = async (data) => {
    let flag = false;
    const organOwner = await createOwner("/organizationOwner", {
      username: data.userName,
      password: data.password,
    });
    updateData(organOwner);
    flag = true;
    changPage("/Owner", flag);
  };
  // const handleSignUp =(e)=>{
  //   e.preventDefault();

  // }

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
            Sign Up
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
                  error={error.username}
                  id="userName"
                  label="UserName"
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
                  error={error.password}
                  value={data.password}
                  id="password"
                  label="password"
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
              {/* -------------confirm pasword */}
              <Grid item xs={12}>
                <TextField
                  onChange={confirmPasswordHandler}
                  required
                  fullWidth
                  error={error.confirmPassword}
                  value={data.confirmPassword}
                  id="confirmPassword"
                  label="confirmPassword"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
                {error.checkPassword ? (
                  // <p error={error.confirmPassword} color="red">
                  //   ConfirmPassword not match{" "}
                  // </p>
                  <Alert icon={false} severity="error">
                    ConfirmPassword not match!
                  </Alert>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: "16px",
                    color: "#666",
                  }}
                  component="span"
                  variant="overline"
                  color="text.primary"
                >
                  Admin
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "15px", letterSpacing: "2px" }}
              endIcon={<LoginIcon />}
            >
              Sign Up
            </Button>
            <Grid textAlign="center">
              <Link color="secondary" href="/" underline="none">
                Login
              </Link>
            </Grid>
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
// const options = ["Admin", "Teacher", "Student"];

const ActionType = {
  UserName: "__UserName",
  Password: "__Password",
  ConfirmPassword: "__ConfirmPassword",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UserName:
      return { ...state, userName: action.value };
    case ActionType.Password:
      return { ...state, password: action.value };
    case ActionType.ConfirmPassword:
      return { ...state, confirmPassword: action.value };
    default:
      break;
  }
};

const initialValue = {
  userName: "",
  password: "",
  confirmPassword: "",
};
