import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const accessToken = useSelector(
    (state: any) => state.userData.accessToken
  );

  return accessToken ? <Outlet /> : <Navigate to="/verify" replace />;
};

export default ProtectedRoute;