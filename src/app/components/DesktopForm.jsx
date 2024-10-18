"use client";
import React, { useState } from "react";
import DesktopFormComp from "./DesktopFormComp";

function DesktopForm() {
  const [load, setLoad] = useState(false);
  return (
    <section className="flex flex-col items-center w-full mx-auto">
      <div className="w-[90%]">
        <DesktopFormComp formName={"bottomForm"} setLoad={setLoad} />

        <label
          className={`block btn ${load && "opacity-50 "}`}
          htmlFor="bottomForm-submit"
        >
          {load ? "Submitting..." : "Submit"}
        </label>
      </div>
    </section>
  );
}

export default DesktopForm;
