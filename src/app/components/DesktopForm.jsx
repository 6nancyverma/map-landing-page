"use client";
import React, { useState } from "react";
import DesktopFormComp from "./DesktopFormComp";
import { useTranslations } from "next-intl";

function DesktopForm() {
  const u = useTranslations("FormCard");
  const [load, setLoad] = useState(false);
  return (
    <section className="flex flex-col items-center w-full mx-auto">
      <div className="w-[90%]">
        <DesktopFormComp formName={"bottomForm"} setLoad={setLoad} />

        <label
          className={`block btn ${load && "opacity-50 "}`}
          htmlFor="bottomForm-submit"
        >
          {load ? u("submitting") : u("submit")}
        </label>
      </div>
    </section>
  );
}

export default DesktopForm;
