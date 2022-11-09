import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "../assets/Imgs";
import { Link } from "react-router-dom";
import styles from "../style";
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-around  md:flex-row  md:bg-[#F9FAFB] md:h-[90px] md:w-full `}
    >
      <div
        className={`flex justify-center items-center md:flex-row-reverse md:gap-7`}
      >
        <div className={`w-[350px] md:w-fit`}>
          <ul
            className={`${styles.textColor} underline text-[13px] xl:text-[16px] md:text-[14px] md:font-bold flex justify-center md:justify-start items-center flex-row flex-wrap gap-5 `}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.repzo.com/why-repzo"
            >
              {" "}
              Why Repzo
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.repzo.com/faqs"
            >
              FAQs
            </a>
            <a target="_blank" rel="noreferrer" href="https://blog.repzo.com/">
              Blogs
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.repzo.com/policies/terms-and-conditions"
            >
              Terms And Conditions
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.repzo.com/policies/privacy-and-policy"
            >
              Privacy And Policy{" "}
            </a>
          </ul>
        </div>
        <div className="hidden md:block">
          <p className="text-hellix text-[14px] font-[500] leading-[150%] text-left">
            © 2022 Repzo, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <div className={`${styles.flexCenter} md:!justify-end gap-4`}>
        <p className="text-hellix xl:text-[16px] text-[14px] font-[500] leading-[24px] text-left">
          Follow us on:
        </p>
        <button
          onClick={() => openInNewTab("https://www.facebook.com/repzoapp")}
        >
          <img
            src={Facebook}
            alt="facebook"
            className={`${styles.textColor} ${styles.imgSize}`}
          />
        </button>

        <button onClick={() => openInNewTab("https://twitter.com/repzoapp")}>
          <img
            src={Twitter}
            alt="twitter"
            className={`${styles.textColor} ${styles.imgSize}`}
          />
        </button>

        <button
          onClick={() => openInNewTab("https://www.instagram.com/repzoapp/")}
        >
          <img
            src={Instagram}
            alt="instagram"
            className={`${styles.textColor} ${styles.imgSize}`}
          />
        </button>

        <button
          onClick={() =>
            openInNewTab(
              "https://www.youtube.com/channel/UCZHOU-63hkoA1c-x3qlfZDw"
            )
          }
        >
          <img
            src={Youtube}
            alt="youtube"
            className={`${styles.textColor} ${styles.imgSize}`}
          />
        </button>

        <button
          onClick={() => openInNewTab("https://jo.linkedin.com/company/repzo")}
        >
          <img
            src={Linkedin}
            alt="linkedin"
            className={`${styles.textColor} ${styles.imgSize}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Footer;
