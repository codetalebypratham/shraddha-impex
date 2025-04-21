import { LucideIcon } from "lucide-react";

type Props = {
  name: string;
  icon: LucideIcon;
};

const IndustryCard = ({ name, icon: Icon }: Props) => {
  return (
    <div
      className="border rounded-md h-30 flex items-center justify-center px-4 text-center text-sm font-semibold text-foreground
      transition-all duration-300 transform hover:scale-105 hover:shadow-lg
       flex-col  gap-3 bg-accent hover:bg-accent/60 cursor-pointer"
    >
      <Icon className="w-6 h-6 text-muted-foreground transition-colors duration-300 group-hover:text-blue-600" />
      <span className="text-xs sm:text-sm">{name.toUpperCase()}</span>
    </div>
  );
};

export default IndustryCard;
