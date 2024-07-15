import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.svg";
import { Dropdown } from "@/components/Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="lg:block hidden">
        <div className="flex justify-between my-8">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex gap-12 items-center">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/browseFields" className="hover:underline">
              Browse Fields
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="flex justify-between my-8">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Dropdown />
        </div>
      </div>
    </>
  );
};

export default Navbar;
