import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Owner from "./Components/Owner";
import Teacher from "./Components/Teacher";
import PrivateRoutes from "./Utils/PrivateRoutes"
import { useAuth } from "./Utils/Auth";

function App() {
  const auth = useAuth();
  console.log(auth);
  return (
    <Routes>
      <Route path="/Owner" element={
        <PrivateRoutes isLoggedIn={auth}>
          <Owner />
        </PrivateRoutes>
      }></Route>

      <Route element={<Login />} path="/" />
    </Routes>
  );
}

export default App;
