import Footer from "@/components/footer/footer";
import AppHeader from "@/components/header/app-header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-full max-w-[1440px] mx-auto">
      <AppHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
