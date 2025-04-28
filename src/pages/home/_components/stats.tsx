type Stat = {
  title: string;
  value: string | number;
  subtitle: string;
};

const stats: Stat[] = [
  {
    title: "We’re Amongst the Top",
    value: 5,
    subtitle: "Chemical Distributors in India",
  },
  {
    title: "We have crossed Business Turnover of",
    value: "300+",
    subtitle: "crores ₹",
  },
  {
    title: "9 Warehouses with",
    value: "40000",
    subtitle: "sq. ft. of constructed area",
  },
  {
    title: "All India",
    value: 6,
    subtitle: "Branches",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 md:p-4 grid-flow-dense">
      {stats.map((stat, index) => (
        <div
          className="w-full min-h-20 h-full bg-accent rounded-md p-4 text-center space-y-2"
          key={index}
        >
          <p className="text-muted-foreground">{stat.title}</p>
          <h2 className="text-4xl font-bold text-foreground underline underline-offset-[15px] leading-loose">
            {stat.value}
          </h2>

          <p className="text-muted-foreground">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
