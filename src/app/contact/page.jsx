import Image from "next/image";
import Style from "./contact.module.css";

const ContactPage = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.imgContainer}>
          <Image src="/contact.png" alt="" fill className={Style.img} />
        </div>
        <div className={Style.formContainer}>
          <form action="" className={Style.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
