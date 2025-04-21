import { lazy } from "react";

const MainLayout = lazy(() => import("@/pages/layout"));
const HomePage = lazy(() => import("@/pages/home/page"));
const AboutPage = lazy(() => import("@/pages/about/page"));
const ProductPage = lazy(() => import("@/pages/products/page"));
const IndustryPage = lazy(() => import("@/pages/industries/page"));
const ContactUsPage = lazy(() => import("@/pages/contact-us/page"));

export {
  HomePage,
  MainLayout,
  AboutPage,
  ProductPage,
  IndustryPage,
  ContactUsPage,
};
