// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import DesktopForm from "./DesktopForm";
// import Image from "next/image";
// import DesktopFormComp from "./DesktopFormComp";

// const DesktopPopup = () => {
//   const [load, setLoad] = useState(false);
//   let searchParams = useSearchParams();
//   let router = useRouter();
//   let abcd = searchParams.get("showPopup");

//   useEffect(() => {
//     if (abcd) {
//       document.body.style.overflowY = "hidden";
//     } else {
//       document.body.style.overflowY = "auto";
//     }

//     return () => {
//       document.body.style.overflowY = "auto";
//     };
//   }, [abcd]);

//   return (
//     abcd && (
//       <section className="z-50 flex items-center justify-center overflow-hidden bg-black/30">
//         <div className="container mx-auto  max-h-[800px] px-4">
//           <div className="flex flex-col items-center overflow-y-auto bg-white w-full max-w-[1121px] mx-auto py-14 h-full">
//             <div
//               className={` flex items-center justify-start w-full pb-4 pl-4 lg:pl-40`}
//             >
//               <a
//                 href={""}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   router.back();
//                 }}
//                 className="flex items-center gap-4 text-black"
//               >
//                 <span></span> Close
//               </a>
//             </div>

//             <div className="flex flex-col items-center w-full px-4 lg:px-0">
//               {/* <div className=" w-[60%] xl:w-[50%] py-5 ">/ */}
//               {/* <DesktopForm /> */}
//               {/* </div> */}
//               <div className=" w-[60%] xl:w-[50%] py-5 ">
//                 <DesktopFormComp formName={"popupForm"} setLoad={setLoad} />

//                 <label
//                   className={`block btn ${load && "opacity-50 "}`}
//                   htmlFor="bottomForm-submit"
//                 >
//                   {load ? "Submitting..." : "Submit"}
//                 </label>
//               </div>
//               <div className={"whatsAppIcon"}>
//                 <a id={"waLink"} href="#" rel={"nofollow"}>
//                   <Image
//                     quality={100}
//                     src={WAIMG}
//                     width={170}
//                     heigth={75}
//                     alt="whatapp bot"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   );
// };

// export default DesktopPopup;
