import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/login";
import Counter from "./components/counter";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/login">Login</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route
          path="login"
          element={<Login onSubmit={val => alert(JSON.stringify(val))} />}
        />
        <Route path="counter" element={<Counter />} />
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
