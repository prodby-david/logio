import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RegisterForm from "./features/register/components/form/RegisterForm";
import SigninForm from "./features/signin/components/form/SigninForm";
import HeroSection from "./features/hero/components/HeroSection";
import MainLayout from "./shared/components/layout/MainLayout";
import FeaturesSection from "./features/features/components/FeaturesSection";
import AboutSection from "./features/about/components/AboutSection";
import PricingSection from "./features/pricing/components/PricingSection";
import ContactsSection from "./features/contacts/components/ContactsSection";
import { Toaster } from "sonner";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HeroSection />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/contacts" element={<ContactsSection />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/signin" element={<SigninForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
