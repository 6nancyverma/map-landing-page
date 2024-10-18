"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import WAIMG from "../../../public/whatsapp.png";
import Form from "../components/Form";

export default function DesktopPopup() {
  const router = useRouter();

  const handleClose = () => {
    document.cookie = "hasSeenPopup=true; path=/";
    router.push("/mobile");
  };

  return (
    <div className="w-full mx-auto overflow-hidden bg-white">
      <div className=" h-screen max-h-[1020px]">
        <div className="flex flex-col items-center justify-between w-full h-full bg-white ">
          <button
            onClick={handleClose}
            className="text-black text-left pl-10 bg-[#E8D8CB] w-full py-4 flex items-center"
          >
            <span className="flex items-center">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.80001 25.1735L7.82651 24.2L15.5265 16.5L7.82651 8.80004L8.80001 7.82654L16.5 15.5265L24.2 7.82654L25.1735 8.80004L17.4735 16.5L25.1735 24.2L24.2 25.1735L16.5 17.4735L8.80001 25.1735Z"
                  fill="#161919"
                />
              </svg>
              <span className="ml-2">Close</span>
            </span>
          </button>

          <div className=" w-[95%] py-5 ">
            <Form />
          </div>

          <div className=" text-left pl-20 bg-[#E8D8CB] w-full py-8"></div>
        </div>
      </div>
    </div>
  );
}
