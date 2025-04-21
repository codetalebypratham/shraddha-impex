import { Link } from "react-router-dom";
import { MobileRoutes, RouteHandler } from "./app-routes";
import { useIsMobile } from "@/hooks/useMedia";
import { ModeToggle } from "../toggleTheme";

const AppHeader = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex items-center justify-between h-20 w-full px-2 md:px-4 border-b border-dashed xl:border-none">
      <div className="flex items-center gap-8 h-full">
        <Link
          to={"/"}
          className="text-base md:text-lg font-medium cursor-pointer hover:opacity-60 transition-opacity"
          draggable={false}
        >
          Shraddha Impex
        </Link>
        {!isMobile && <RouteHandler />}
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        {isMobile && <MobileRoutes />}
      </div>
    </div>
  );
};

export default AppHeader;
