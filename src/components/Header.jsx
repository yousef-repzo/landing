import React from "react";
import {Logo} from '../assets/Imgs'
import styles from "../style";

const Header = () => {
  return (
    <div className={`${styles.headerPosition} md:mt-[40px] mt-[30px]`}>
        <img
          src={Logo}
          alt="logo"
          className="md:w-[130px]"
        />
        <p className={`${styles.heading} `}>
          Monitor Field Reps, Assess Real <br/>
          Data, & Optimize Routes with Repzo
        </p>
    </div>
  );
};

export default Header;
