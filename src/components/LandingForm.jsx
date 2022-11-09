import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import { Brands, Header } from "./components";
import { basicSchema } from "../schemas/index";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";

function LandingForm() {
  console.log(en);
  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 4));
  };
  LandingForm = (props) => {
    return (
      <Form>
        <div className={`${styles.inputMargin}`}>
          <div className={`${styles.labelPosition}`}>
            <label className={`${styles.label}`}>Full Name</label>
            <label className={`${styles.label} text-[14px]`}>Required</label>
          </div>
          <Field
            name="name"
            type="text"
            placeholder="Full name"
            className={`${styles.inputStyle}`}
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-[12px] text-red-700"
          />
        </div>

        <div className={`${styles.inputMargin}`}>
          <div className={`${styles.labelPosition}`}>
            <label className={`${styles.label}`}>Phone Number</label>
            <label className={`${styles.label} text-[14px]`}>Required</label>
          </div>
          <PhoneInput
            international
            defaultCountry="JO"
            name="phone"
            type="text"
            onCountryChange={(countryCode) =>
              props.setValues({ ...props.values, countryCode })
            }
            onChange={(num) => props.setValues({ ...props.values, phone: num })}
            placeholder="79 548 54 36"
            className={`${styles.inputStyle}`}
          />
          <ErrorMessage
            name="phone"
            component="div"
            className={`text-[12px] text-red-700`}
          />
        </div>

        <div className={`${styles.inputMargin}`}>
          <div className={`${styles.labelPosition}`}>
            <label className={`${styles.label}`}>Company Name</label>
            <label className={`${styles.label} text-[14px]`}>Required</label>
          </div>
          <Field
            name="companyName"
            type="text"
            placeholder="Company Name"
            className={`${styles.inputStyle}`}
          />
          <ErrorMessage
            name="companyName"
            component="div"
            className="text-[12px] text-red-700"
          />
        </div>

        <div className={`${styles.inputMargin}`}>
          <div className={`${styles.labelPosition}`}>
            <label className={`${styles.label}`}>Staff Size</label>
            <label className={`${styles.label} text-[14px]`}>Required</label>
          </div>
          <Field name="staff" as="select" className={`${styles.inputStyle} `}>
            <option value="1-50">1-50</option> 
            <option value="50-150">50-150</option>
            <option value="250-500">250-500</option> 
            <option value="500-1000">500-1000</option> 
            <option value="+1000">+1000</option>
          </Field>
          <ErrorMessage
            name="staff"
            component="div"
            className="text-[12px] text-red-700"
          />
        </div>

        <div className={`${styles.inputMargin}`}>
          <div className={`${styles.labelPosition}`}>
            <label className={`${styles.label}`}>Company Email</label>
            <label className={`${styles.label} text-[14px]`}>Optional</label>
          </div>
          <Field
            name="companyEmail"
            type="temail"
            placeholder="Name@DominName.com"
            className={`${styles.inputStyle}`}
          />
          <ErrorMessage
            name="companyEmail"
            component="div"
            className="text-[12px] text-red-700"
          />
        </div>

        <div className={`${styles.inputMargin}`}>
          <Field
            type="checkbox"
            name="chooseCb"
            className="w-[18px] h-[18px] mr-[5px] border accent-secondaryPurple"
          />
          <p className="inline font-hellix font-[500] text-[16px] leading-[19px] text-secondaryGray fo">
            I agree to the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.repzo.com/policies/terms-and-conditions"
              className="underline cursor-pointer"
            >
              Main Services Agreement.
            </a>
          </p>
          <ErrorMessage
            name="chooseCb"
            component="div"
            className="text-[12px] text-red-700"
          />
        </div>
        <div className="sticky md:relative bottom-0 w-full pb-12 px-4 pt-4 bg-white">
          <button
            type="submit"
            disabled={!(props?.isValid && props?.dirty)}
            className={`w-full h-[48px] rounded-[4px]  bg-secondaryPurple disabled:bg-primaryPurple disabled:cursor-not-allowed text-white`}
          >
            Submit
          </button>
          <div className="mt-[10px]  md:hidden">
            <Brands
              text={"text-[11px]"}
              gap={"gap-[11px]"}
              width={"w-[48px]"}
              height={"h-[22px]"}
              width2={"w-[58px]"}
              height2={"h-[28px]"}
              width3={"w-[47px]"}
              height3={"h-[19px]"}
              width4={"w-[53px]"}
              height4={"h-[40px]"}
            />
          </div>
        </div>
      </Form>
    );
  };
  return (
    <>
      <div className={`md:hidden`}>
        <Header />
      </div>
      <div className={`${styles.flexCenter} md:hidden mt-[20px]`}>
        <Link
          to="/More"
          className="font-hellix text-[14] font-[400] leading-[21px] tracking-normal text-center text-[#3DBFF0]"
        >
          Show More Details
        </Link>
      </div>
      <div className={`${styles.formBorder}`}>
        <p className={`${styles.formHeader}`}>Get a Demo</p>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            countryCode: "JO",
            companyName: "",
            companyEmail: "",
            staff: "",
          }}
          validationSchema={basicSchema}
          onSubmit={onSubmit}
        >
          {LandingForm}
        </Formik>
      </div>
    </>
  );
}

export default LandingForm;
