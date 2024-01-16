import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Cookies from "js-cookie";

import { Auth } from "./pages/Auth/Auth";
import { Home } from "../src/pages/Home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
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
