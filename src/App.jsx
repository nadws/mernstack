import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      {/* 🔹 Navbar */}
      {/* <nav className="bg-white/80 backdrop-blur-md shadow-sm py-4 px-8 flex justify-center gap-6 font-medium text-gray-700">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `hover:text-indigo-600 transition ${
              isActive ? "text-indigo-600 font-semibold" : ""
            }`
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `hover:text-indigo-600 transition ${
              isActive ? "text-indigo-600 font-semibold" : ""
            }`
          }
        >
          Register
        </NavLink>
      </nav> */}

      {/* 🔹 Halaman */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
