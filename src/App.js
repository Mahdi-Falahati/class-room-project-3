import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Owner from "./Pages/Owner";
import Teacher from "./Pages/TeacherPage";
import Student from "./Pages/StudentPage";
import PrivateRoutes from "./Utils/PrivateRoutes";
import { Auth } from "./Utils/Auth";

function App() {
  return (
    <Auth>
      <Routes>
        <Route
          path="/Owner"
          element={
            <PrivateRoutes>
              <Owner />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/Teacher"
          element={
            <PrivateRoutes>
              <Teacher />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/Student"
          element={
            <PrivateRoutes>
              <Student />
            </PrivateRoutes>
          }
        ></Route>

        <Route element={<Login />} path="/" />
      </Routes>
    </Auth>
  );
}

export default App;
