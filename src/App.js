import Login from "./Components/Login";
import Owner from "./Components/Owner";
import Teacher from "./Components/Teacher";
import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "./Utils/PrivateRoutes"

function App() {
  return (
    //  
    // <Owner />

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Teacher />} path="/Teacher" exact />
          <Route element={<Owner />} path="/Owner"/>
        </Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>

  );
}

export default App;
