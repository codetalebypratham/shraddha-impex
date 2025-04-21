import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

type Props = {
  name: string;
  location: string;
};

const PartnerCard = ({ name, location }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100); // delay for effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`bg-accent border  rounded-md px-4 py-3 flex gap-3 items-start transition-all duration-500 ease-in-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        hover:shadow-md hover:scale-[1.02]`}
    >
      <MapPin className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
      <div className="space-y-1">
        <div className="font-semibold text-sm text-foreground">{name}</div>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
