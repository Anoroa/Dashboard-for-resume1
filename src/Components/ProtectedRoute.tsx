import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const accessToken = useSelector((state: any) => state.userData.accessToken) || Cookies.get("accessToken");

  return accessToken ? <Outlet /> : <Navigate to="/verify" replace />;
};

export default ProtectedRoute;