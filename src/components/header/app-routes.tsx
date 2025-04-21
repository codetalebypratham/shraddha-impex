import { Check, ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useIsTablet } from "@/hooks/useMedia";
import { cn } from "@/lib/utils";

import DropDownModel from "../models/drop-down-model";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { getMainAndMoreRoutes, routes, RouteType } from "./routes";
import SheetModel from "../models/sheet-model";
import { Button } from "../ui/button";

type NavLinkItemProps = {
  href: string;
  name: string;
};

type MoreDropdownProps = {
  routes: RouteType[];
};

const NavLinkItem = ({ href, name }: NavLinkItemProps) => {
  const pathname = useLocation().pathname;
  const active = pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "transition-opacity relative z-30 h-auto w-full md:w-fit md:h-full flex items-center justify-center group",
        active ? "opacity-100" : "opacity-60 hover:opacity-100"
      )}
    >
      <div className="absolute z-10 w-full h-full flex items-center justify-center text-5xl opacity-5 group-hover:tracking-[20px] transition-all md:hidden">
        {name}
      </div>
      <div
        className={cn(
          "hidden md:block absolute bottom-0 h-[1px] bg-primary rounded-full transition-all",
          active
            ? "w-4 opacity-100"
            : "w-0 group-hover:w-4 opacity-0 group-hover:opacity-100"
        )}
      />
      <div className="text-xl md:text-base">{name}</div>
    </Link>
  );
};

const MoreDropdown = ({ routes }: MoreDropdownProps) => {
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);

  const activeRoute = routes.find((r) => r.href === pathname);

  const dropdownItems = routes.map((route) => (
    <DropdownMenuItem
      key={route.name}
      onClick={() => setOpen(false)}
      className={cn(
        "transition-opacity relative cursor-pointer flex items-center justify-between",
        activeRoute?.name === route.name
          ? "opacity-60"
          : "opacity-100 hover:opacity-60"
      )}
    >
      <Link to={route.href} className="w-full h-full absolute" />
      <div>{route.name}</div>
      {activeRoute?.name === route.name && <Check />}
    </DropdownMenuItem>
  ));

  return (
    <DropDownModel
      open={open}
      onOpenChange={() => setOpen((prev) => !prev)}
      content={dropdownItems}
      className="my-4"
      align="center"
    >
      <div
        className={cn(
          "transition-opacity relative cursor-pointer flex items-center justify-center gap-1 h-full group",
          activeRoute || open ? "opacity-100" : "opacity-60 hover:opacity-100"
        )}
      >
        <div
          className={cn(
            "hidden sm:block absolute bottom-0 h-[1px] bg-primary rounded-full transition-all",
            activeRoute || open
              ? "w-4 opacity-100"
              : "w-0  group-hover:w-4 opacity-0 group-hover:opacity-100"
          )}
        />
        <div>{activeRoute?.name ?? "More"}</div>
        {open ? (
          <ChevronUp className="size-4" />
        ) : (
          <ChevronDown className="size-4" />
        )}
      </div>
    </DropDownModel>
  );
};

export const RouteHandler = () => {
  const isTablet = useIsTablet();
  const { mainRoutes, moreRoutes } = getMainAndMoreRoutes();

  const activeRoutes = isTablet ? mainRoutes : routes;

  return (
    <div className="flex items-center gap-6 lg:px-10 h-full">
      {activeRoutes.map((route) => (
        <NavLinkItem key={route.name} name={route.name} href={route.href} />
      ))}
      {isTablet && <MoreDropdown routes={moreRoutes} />}
    </div>
  );
};

export const MobileRoutes = () => {
  const [open, setOpen] = useState(false);

  const mobroutes = (
    <>
      <div className=" flex flex-col items-center justify-evenly h-full w-full pb-20">
        {routes.map((route) => (
          <NavLinkItem key={route.name} name={route.name} href={route.href} />
        ))}
      </div>
    </>
  );

  return (
    <SheetModel
      open={open}
      onOpenChange={() => setOpen(true)}
      onClose={() => setOpen(false)}
      content={mobroutes}
      title="Shraddha Impex"
    >
      <Button variant={"outline"} size={"icon"}>
        <Menu />
      </Button>
    </SheetModel>
  );
};
