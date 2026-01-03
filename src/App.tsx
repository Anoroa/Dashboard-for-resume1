import { BrowserRouter, Routes, Route } from "react-router";

import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import DashboardLayout from "./Layouts/DashboardLayout";
import NotFound from "./Pages/NotFound";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Tables from "./Pages/Tables";
import Billing from "./Pages/Billing";
import Profile from "./Pages/Profile";
import RTL from "./Pages/RTL";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/verify" element={<Login />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/auth" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route path="billing" element={<Billing />} />
            <Route path="profile" element={<Profile />} />
            <Route path="rtl" element={<RTL />} />
          </Route>
        </Route>
        {/* 404 Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
