import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type DropDownModelProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  onOpenChange: (open: boolean) => void;
};

const DropDownModel: React.FC<DropDownModelProps> = ({
  children,
  content,
  align = "start",
  side = "bottom",
  className,
  open,
  onOpenChange,
}) => {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        className={cn(className, "max-w-[220px] lg:max-w-[340px] w-full p-0")}
      >
        {content}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownModel;
