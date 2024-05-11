import Links from "./links/Links";
import Style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.logo}>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
