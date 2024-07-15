import { Link } from "react-router-dom";
import Logo from "/src/assets/logoWhite.svg";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-slate-900 p-14 mt-36">
      <img src={Logo} alt="logo" className="mx-auto" />
      <div className="flex flex-wrap gap-12 justify-center text-white pt-9">
        <Link to="" className="hover:underline">
          Newsletter
        </Link>
        <Link to="" className="hover:underline">
          Offers
        </Link>
        <Link to="" className="hover:underline">
          FAQ
        </Link>
        <Link to="" className="hover:underline">
          Terms of Service
        </Link>
        <Link to="" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="" className="hover:underline">
          About us
        </Link>
        <Link to="" className="hover:underline">
          Contact
        </Link>
      </div>
      <div className="text-slate-500 flex gap-2 pt-5 justify-center">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  );
};

export default Footer;
