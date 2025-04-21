import IndustryCard from "@/components/cards/industry-card";
import { industries } from "@/data/industry";

const IndustryGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl w-full">
        {industries.map((item, index) => (
          <IndustryCard key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default IndustryGrid;
