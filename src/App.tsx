import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardLayout from "./Layouts/DashboardLayout";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/verify?" element={<Login />}/>
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<DashboardLayout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
