import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  addForm,
  getVisitorAPIInfo,
  getCountryCode,
  getUrlParams,
} from "../utils/utils";
import PhoneInput from "react-phone-input-2";
import "../phone.css";

function Form({ formName, setLoad, loc }) {
  const router = useRouter();

  const initState = {
    name: "",
    email: "",
    phone: "",

    note: "",
    formName,
  };

  const [formData, setFormData] = useState(initState);
  const [selectedValue, setSelectedValue] = useState("Phone");
  const [countryCodeISO, setCountryCodeISO] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [phoneData, setPhoneData] = useState();
  const [visitorInfo, setVisitorInfo] = useState("");

  const handleRadioChange = (val) => {
    setSelectedValue(val);
  };

  useEffect(() => {
    getVisitorAPIInfo().then((data) => {
      const countryCode = data?.countryCode?.toLowerCase() || "in";
      const visitorNotes = data?.notes || "";

      setCountryCodeISO(countryCode);
      setVisitorInfo(visitorNotes);

      const countryData = getCountryCode(countryCode);
      if (countryData && countryData.dial_code) {
        setPhoneData({
          dialCode: countryData.dial_code.replace("+", ""),
        });
      }
    });
  }, []);

  useEffect(() => {
    let x = getCountryCode(countryCodeISO);
    if (x && x.code) {
      setPhoneData({
        dialCode: x?.dial_code.replace("+", ""),
      });
      setInputCountry(x.code.toLowerCase());
    }
  }, [countryCodeISO]);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let message = `Form Name : ${formName}\n-------\n\n`;
    message += getUrlParams();

    let note = message + visitorInfo;

    const phone = formData.phone || "";
    const dialCode = phoneData?.dialCode ? `+${phoneData.dialCode}` : "";

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
      // let doc = await addForm(obj);
      console.log("obj", obj);
      setLoad(false);
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
        className="flex flex-col items-center w-full "
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="flex flex-col w-full gap-2">
          <input
            className="inputStyle"
            placeholder="Name *"
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
            placeholder="Email *"
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
                placeholder={"+91"}
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
              placeholder="Phone *"
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

export default Form;
