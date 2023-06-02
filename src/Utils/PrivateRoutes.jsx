import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
const PrivateRoutes = ({children }) => {
  const auth=useAuth();
  if (!auth.user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default PrivateRoutes;