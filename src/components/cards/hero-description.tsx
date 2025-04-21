const HeroDescription = ({ description }: { description: string }) => {
  return (
    <div className="text-base sm:text-lg mb-6 text-muted-foreground line-clamp-2">
      {description}
    </div>
  );
};

export default HeroDescription;
