import { Link } from "react-router-dom";
import SectionWrapper from "../cards/section-wrapper";
import { Mail, Map, Phone } from "lucide-react";
import { routes } from "../header/routes";

const FooterLinks = () => (
  <div>
    <h4 className="text-foreground font-bold text-lg mb-4">USEFUL LINKS</h4>
    <ul className="space-y-2 text-sm">
      {routes.map((link, index) => (
        <Link
          key={link.href}
          to={link.href}
          className={`flex items-center gap-2 group hover:opacity-40 ${
            index !== 0 && "border-t pt-2 border-accent"
          }`}
        >
          <span className="text-foreground text-xs">●</span>
          <div className="text-sm md:text-base">{link.name}</div>
        </Link>
      ))}
    </ul>
  </div>
);

const FooterContact = () => (
  <div>
    <h4 className="text-foreground font-bold text-sm md:text-base mb-4">
      CONTACT US
    </h4>
    <ul className="space-y-4 text-sm text-muted-foreground">
      <li className="flex items-start gap-3">
        <Map className="text-muted-foreground mt-1" />
        <div className="text-foreground">
          <strong className="text-muted-foreground">Address:</strong>
          <br />
          103, Chitrarath Building,
          <br />
          Opp. Hotel President,
          <br />
          Off. C. G. Road, Navrangpura,
          <br />
          AHMEDABAD - 380 009
        </div>
      </li>
      <li className="flex items-center gap-3 border-t border-accent pt-4">
        <Phone className="text-muted-foreground " />
        <span className="text-foreground">
          <strong className="text-muted-foreground ">Phone:</strong> 079 2656
          2619
        </span>
      </li>
      <li className="flex items-center gap-3 border-t border-accent pt-4">
        <Mail className="text-muted-foreground " />
        <span>
          <strong className="text-muted-foreground">Email:</strong>{" "}
          <a
            href="mailto:info@rsgchemicals.com"
            className="text-foreground hover:underline"
          >
            shraddhagroup@gmail.com
          </a>
        </span>
      </li>
    </ul>
  </div>
);

const FooterBottom = () => (
  <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-gray-400 pt-4">
    <p>
      2025 © Rajeshbhai Doshi (SI).{" "}
      <span className="text-foreground">All Rights Reserved.</span>
    </p>
  </div>
);

const FooterLogo = () => (
  <div className="text-sm md:text-base">
    <img src="/logo.png" alt="SHRADDHA IMPEX" className="mb-4 w-48" />
    <p className="text-muted-foreground text-sm leading-relaxed">
      Shraddha Impex, with 30+ years in plastic raw materials trading,
      specializes in granules and masterbatches for packaging and automotive
      sectors, achieving ₹100–150 crores turnover through internal resources.
    </p>
  </div>
);

const Footer = () => {
  return (
    <SectionWrapper bg>
      <footer className="pt-10 pb-5 border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b pb-10">
          <FooterLogo />
          <FooterLinks />
          <FooterContact />
        </div>
        <FooterBottom />
      </footer>
    </SectionWrapper>
  );
};

export default Footer;
