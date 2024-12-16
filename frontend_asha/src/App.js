import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ViewChildBirths from "./components/ViewChildBirths";
import AddChildBirth from "./components/AddChildBirth";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>ASHA Worker Portal</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Dashboard />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/view-child-births"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <ViewChildBirths />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-child-birth"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <AddChildBirth />
                </>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
