import { Login, Register } from "./pages/Auth";
import NotFound from "./pages/404";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

import MainLayout from "./layout/MainLayout/MainLayout";


function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>

    </div>
  );
}

export default App;
