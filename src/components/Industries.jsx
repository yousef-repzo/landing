import React from "react";
import { Red, Blue, Yellow } from "../assets/Imgs";
import styles from "../style";
const Industries = () => {
  return (
    <div className={`flex flex-col gap-6`}>
      <div>
        <p
          className={`${styles.commonText} text-[12px] text-[#b5b3b3] leading-[150%] md:text-[18px] md:text-left`}
        >
          Repzo is a leading field force automation solution that helps
          <br />
          businesses manage all their fieldwork by using the potent
          <br /> power of automation
        </p>
      </div>
      <div className={`flex flex-col gap-6`}>
        <div>
          <p className=" font-hellix text-[14px] md:text-[20px] font-bold leading-[18px] text-left text-black">
            Industries We Serve:
          </p>
        </div>
        <div className={`${styles.industriesFlex} mt-2`}>
          <div className={`${styles.industryFlex}`}>
            <img src={Red} alt="red" className={`${styles.circlesImgs}`} />
            <p className={`${styles.circlesText}`}>FMCG</p>
          </div>
          <div className={`${styles.industryFlex}`}>
            <img src={Blue} alt="blue" className={`${styles.circlesImgs}`} />
            <p className={`${styles.circlesText}`}>
              Pharmaceutical & Life Sciences
            </p>
          </div>
          <div className={`${styles.industryFlex}`}>
            <img
              src={Yellow}
              alt="yellow"
              className={`${styles.circlesImgs}`}
            />
            <p className={`${styles.circlesText}`}>
              Maintenance & Field Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
