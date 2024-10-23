"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import {
//   addForm,
//   getCountryCode,
//   getUrlParams,
//   getVisitorAPIInfo,
// } from "../utils/utils";

import PhoneInput from "react-phone-input-2";
import "../[locale]/phone.css";
import { useTranslations } from "next-intl";

function Form({ formName, setLoad }) {
  const t = useTranslations("Form");
  let router = useRouter();
  const initState = {
    name: "",
    email: "",
    phone: "",
    preferredModeOfContact: "phone",
    note: "",
    formName,
  };

  const [formData, setFormData] = useState(initState);
  const [selectedValue, setSelectedValue] = useState("Phone");
  const [countryCodeISO, setCountryCodeISO] = useState("ae");
  const [inputCountry, setInputCountry] = useState("ae");
  const [phoneData, setPhoneData] = useState();
  const [visitorInfo, setVisitorInfo] = useState("");

  const handleRadioChange = (val) => {
    setSelectedValue(val);
  };

  // useEffect(() => {
  //   getVisitorAPIInfo().then((data) => {
  //     setInputCountry(data?.countryCode);
  //     setVisitorInfo(data?.notes);
  //   });
  // }, []);

  // useEffect(() => {
  //   let x = getCountryCode(countryCodeISO);
  //   if (x && x.code) {
  //     setTimeout(() => {
  //       setPhoneData({
  //         dailCode: x?.dial_code.replace("+", ""),
  //       });
  //       setInputCountry(x.code.toLowerCase());
  //     }, 20);
  //   }
  // }, [countryCodeISO]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let message = `Form Name : ${formName}\n-------\n\n`;
    message += getUrlParams();

    let note = `Preferred Mode Of Contact : ${selectedValue}\n\n\n`;
    note += message + visitorInfo;
    const phone = formData.phone ? formData.phone : "";
    const dialCode = phoneData.dialCode ? `+${phoneData.dialCode}` : "";

    let obj = {
      note,
      phoneData,
      countryCodeISO,
      name: formData.name,
      email: formData.email,
      mobile: `${dialCode}${phone}`,
    };

    setLoad(true);

    try {
      // router.push(`/${locale}/thank-you`);
      //   let doc = await addForm(obj);
      console.log("obj", obj);
      let { ok } = doc;
      if (ok) {
        router.push(`/${locale}/thank-you`);
        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (error) {
      console.error("Error while submitting form", error);
      setLoad(false);
    }
  };

  return (
    <div id={"formComp"}>
      <form
        method={"get"}
        action={"/submit"}
        name={formName}
        className="w-full py-[1rem] flex flex-col items-center "
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="flex flex-col w-full gap-2">
          <input
            className="inputStyle"
            placeholder={t("name")}
            name="name"
            id="name"
            autoComplete="name"
            onChange={(e) => handleChange(e)}
            required
            aria-label="Name"
          />

          <input
            className="inputStyle"
            type="email"
            placeholder={t("email")}
            name="email"
            id="email"
            autoComplete={"email"}
            onChange={(e) => handleChange(e)}
            required
            aria-label="Email"
          />

          <div className="flex w-full tel-container" id="phoneField">
            <div>
              <PhoneInput
                countryCodeEditable={true}
                autoFormat={false}
                containerClass={"rti"}
                inputStyle={{
                  backgroundColor: "transparent",
                  height: "52px",
                  fontSize: "16px",
                  width: "100px",
                  borderRadius: "0",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  height: "52px",
                  // borderRadius: "0",
                }}
                placeholder={"+971"}
                inputProps={{
                  name: "deveot",
                  maxLength: 15,
                }}
                preferredCountries={["ae", "in", "uk", "de", "ru", "sg", "us"]}
                country={inputCountry}
                onChange={(value, data) => {
                  const countryCode = data?.countryCode || "";

                  setFormData((prev) => ({
                    ...prev,
                  }));
                  setPhoneData(data);
                  setCountryCodeISO(countryCode);
                }}
              />
            </div>

            <input
              className="ml-4 inputStyle "
              type="phone"
              placeholder={t("phone")}
              name="phone"
              id="phone"
              autoComplete={"tel"}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <input
          style={{ width: 10, height: 10 }}
          className="opacity-0"
          type="text"
          placeholder="country"
          name="country"
          id="country"
          autoComplete={"country"}
          onChange={(e) => {
            setCountryCodeISO(e.target.value);
          }}
        />

        <input type="submit" id={`${formName}-submit`} className="hidden" />
      </form>
    </div>
  );
}

export function LinkButtonComp(props) {
  const locale = useLocale();
  let x = props.href;

  if (props?.href) {
    x = props?.href.replace("/?", "");
  }

  const params1 = new URLSearchParams(x);
  const params2 = useSearchParams();

  for (let [key, value] of params2) {
    params1.append(key, value);
  }

  let furl = `/${locale}/?${params1.toString()}`;

  furl = furl.replace(/%20/g, "+").replace(/%26/g, "&");

  return (
    <Link href={furl} className={props.className}>
      {props.children}
    </Link>
  );
}

export default Form;
