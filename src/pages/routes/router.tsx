import { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  AboutPage,
  ContactUsPage,
  HomePage,
  IndustryPage,
  MainLayout,
  ProductPage,
} from "./routes";
import ScrollToTop from "@/components/scroll-to-top";

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
        <ScrollToTop />
      </Suspense>
    ),
    children: [
      {
        Component: MainLayout,
        children: [
          {
            path: "/",
            Component: HomePage,
          },
          {
            path: "/about-us",
            Component: AboutPage,
          },
          {
            path: "/products",
            Component: ProductPage,
          },
          {
            path: "/industries",
            Component: IndustryPage,
          },
          {
            path: "/contact-us",
            Component: ContactUsPage,
          },
        ],
      },
    ],
  },
]);
