import React, { useState } from "react";
import { Sm } from "../assets/Imgs";
import { Header, Industries, Brands, Footer } from "./components";
import styles from "../style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Showmore = () => {
  const naivegate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.innerWidth > 800) {
        naivegate("/");
      }
    };
    window.addEventListener("resize", handleClick);

    //remove the event listener when component unmount
    return () => {
      window.removeEventListener("resize", handleClick);
    };
  }, []);

  return (
    <div>
      <div className="ml-[15px] mt-[40px] ">
        <Link
          to="/"
          className="text-[#3DBFF0] text-hellix font-[500px] text-[14px] leading-[129.52%]"
        >
          Close
        </Link>
      </div>
      <div className={`flex flex-col justify-center items-center`}>
        <div>
          <img src={Sm} alt="main img" />
        </div>
        <div>
          <Header />
        </div>
        <div className={`flex flex-col gap-8 mt-4`}>
          <div className={``}>
            <Industries />
          </div>
          <div className={``}>
            <Brands
              text={"text-[14px]"}
              align={"text-center"}
              justify={"justify-around"}
              gap={"gap-2"}
              width={"w-[58px]"}
              height={"h-[27px]"}
              width2={"w-[71px]"}
              height2={"h-[33px]"}
              width3={"w-[55px]"}
              height3={"h-[23px]"}
              width4={"w-[64px]"}
              height4={"h-[49px]"}
            />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showmore;
