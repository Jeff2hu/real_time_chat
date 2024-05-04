import Login from "@Page/login/Login";
import SignUp from "@Page/signUp/SignUp";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import { useJwt } from "./zustand/useJwt";

function App() {
  const { jwt } = useJwt();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={jwt ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={jwt ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signUp"
          element={jwt ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route
          path="*"
          element={
            jwt ? <Navigate to="/" replace /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
