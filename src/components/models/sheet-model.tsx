import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type SheetModelProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  open: boolean;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  onOpenChange: () => void;
  onClose: () => void;
  description?: string;
  title?: string;
};
const SheetModel = ({
  content,
  children,
  onOpenChange,
  onClose,
  open,
  side = "right",
  className,
  title,
  description,
}: SheetModelProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className={cn(className, "max-w-[768px] w-full")}
        side={side}
      >
        <SheetHeader className="flex flex-row items-center justify-between w-full h-20">
          <div className="w-auto">
            <SheetTitle>{title ?? ""}</SheetTitle>
            <SheetDescription>{description ?? ""}</SheetDescription>
          </div>
          <Button variant={"ghost"} size={"icon"} onClick={onClose}>
            <X />
          </Button>
        </SheetHeader>
        {content}
      </SheetContent>
    </Sheet>
  );
};

export default SheetModel;
