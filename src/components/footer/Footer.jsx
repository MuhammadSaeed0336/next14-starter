import Style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.logo}>SAEED</div>
        <div className={Style.text}>
          Muhammad Saeed thoughts agency &copy; All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
