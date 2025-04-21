export type RouteType = { name: string; href: string };

export const routes: RouteType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Industries",
    href: "/industries",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const getMainAndMoreRoutes = () => {
  const moreNames = [
    "Products",
    "Industries",
    "Contact Us",
  ];

  const mainRoutes = routes.filter((route) => !moreNames.includes(route.name));
  const moreRoutes = routes.filter((route) => moreNames.includes(route.name));

  return { mainRoutes, moreRoutes };
};
