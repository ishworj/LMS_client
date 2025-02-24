import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import UserLayout from "./components/layout/UserLayout";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";

function App() {
  return (
    <>
      {/* public routes */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>

      {/* purivate routes */}
      <Routes>
        <Route path="/users" element={<UserLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
