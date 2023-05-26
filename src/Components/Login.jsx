import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";


const theme = createTheme();

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
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