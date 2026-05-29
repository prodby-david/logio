import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import RegisterForm from "./features/register/components/form/RegisterForm";
import HeroSection from "./features/hero/components/HeroSection";
import MainLayout from "./shared/components/layout/MainLayout";

function LandingPage() {
  const navigate = useNavigate();
  return <HeroSection onStartClick={() => navigate("/register")} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
