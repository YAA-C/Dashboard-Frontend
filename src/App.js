import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Cookies from "js-cookie";

import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Auth } from "./pages/Auth/Auth";
import { Profile } from "./pages/profile/profile";
import { DisplayCsv } from "./pages/DisplayCSV/displayCsv";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Analysis } from "./pages/Analysis/Analysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/displayCsv"
          element={
            <ProtectedRoute>
              <DisplayCsv />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analysis"
          element={
            <ProtectedRoute>
              <Analysis />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

const ProtectedRoute = ({ children, ...rest }) => {
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  useEffect(() => {
    if (!Cookies.get("access_token")) {
      setIsUnauthorized(true);
    }
  }, []);

  if (isUnauthorized) {
    return <Navigate to="/auth" />;
  }

  return children;
};
