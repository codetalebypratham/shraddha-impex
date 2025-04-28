const HeroDescription = ({ description }: { description: string }) => {
  return (
    <div className="text-base lg:text-lg mb-6 text-muted-foreground line-clamp-4">
      {description}
    </div>
  );
};

export default HeroDescription;
