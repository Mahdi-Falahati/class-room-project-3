import { Outlet, Navigate } from 'react-router-dom';
// import Login from '../Components/Login';

const PrivateRoutes = () => {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}
export default PrivateRoutes