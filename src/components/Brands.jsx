import React from "react";
import { img1, img2, img3, img4 } from "../assets/Imgs";
const Brands = (props) => {
  return (
    <div>
      <p
        className={`mb-[10px] font-hellix italic font-bold leading-[140%] ${props.text} ${props.align}`}
      >
        Trusted By Hundreds of International Brands & <br /> Distributors
      </p>
      <div
        className={`ml-[-10px] flex flex-row items-center ${props.justify} ${props.gap}`}
      >
        <img
          src={img1}
          alt="img1"
          className={`${props.height}  ${props.width}`}
        />
        <img
          src={img2}
          alt="img2"
          className={`${props.height2}  ${props.width2}`}
        />
        <img
          src={img3}
          alt="img3"
          className={`${props.height3}  ${props.width3}`}
        />
        <img
          src={img4}
          alt="img4"
          className={`${props.height4}  ${props.width4}`}
        />
      </div>
    </div>
  );
};

export default Brands;
