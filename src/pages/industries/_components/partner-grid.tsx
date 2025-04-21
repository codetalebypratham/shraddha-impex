import PartnerCard from "@/components/cards/partner-card";
import { partners } from "@/data/partners";

const PartnerGrid = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            RSG has regular and long-term supply partners worldwide that promote
            their products.
          </h2>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl mx-auto">
            The primary sales focus is the Indian market. We have supplier
            support coupled with the group’s financial strength ensures that its
            customers are supplied with good quality products on a regular basis
            at workable prices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {partners.map((partner, i) => (
            <PartnerCard
              key={i}
              name={partner.name}
              location={partner.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;
