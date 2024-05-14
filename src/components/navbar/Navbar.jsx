import Link from "next/link";
import Links from "./links/Links";
import Style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.container}>
      <Link href="/" className={Style.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
