"use client";
import React from "react";
// import {
//   facebook,
//   instagram,
//   linkedin,
//   youtube,
// } from "../[locale]/utils/icons";
import Image from "next/image";
import footerLogo from "../../../public/logo.png";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="flex flex-col items-center w-full py-12 bg-[#FFDA5F] mt-3 ">
      <Image
        src={footerLogo}
        alt="Bnw Logo"
        width={152}
        height={73}
        style={{ marginBottom: "20px" }}
      />
      <span className=" text-sm text-[#9E883E] lg:pt-4 ">{t("title")}</span>
      <div className="flex items-center justify-center w-3/5 gap-8 pt-2 lg:pt-4 ">
        <a
          href={"https://www.facebook.com/profile.php?id=61560542909712"}
          target={"_blank"}
          aria-label="facebook"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#A67A46" />
            <path
              d="M21 6.00364L17.944 6C14.9805 6 13.0661 7.93091 13.0661 10.9227V13.1909H10V17.2955H13.0661L13.0624 26H17.3524L17.3561 17.2955H20.8743L20.8715 13.1918H17.3561V11.2673C17.3561 10.3418 17.5789 9.87364 18.8037 9.87364L20.9908 9.87273L21 6.00364Z"
              fill="#E8D8CB"
            />
          </svg>
        </a>
        <a
          aria-label="instagram"
          href={"https://www.instagram.com/map.dxb.ae/?hl=en"}
          target={"_blank"}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_328)">
              <rect width="32" height="32" rx="16" fill="#A67A46" />
              <path
                d="M16.0741 6C18.8112 6 19.1527 6.01007 20.2266 6.06044C21.2995 6.11081 22.0299 6.27905 22.6726 6.52889C23.3375 6.78477 23.8976 7.13132 24.4577 7.69043C24.97 8.19403 25.3664 8.8032 25.6193 9.47556C25.8681 10.1173 26.0373 10.8487 26.0877 11.9215C26.1351 12.9954 26.1481 13.3369 26.1481 16.0741C26.1481 18.8112 26.1381 19.1527 26.0877 20.2266C26.0373 21.2995 25.8681 22.0299 25.6193 22.6726C25.3671 23.3453 24.9706 23.9546 24.4577 24.4577C23.954 24.9698 23.3448 25.3662 22.6726 25.6193C22.0309 25.8681 21.2995 26.0373 20.2266 26.0877C19.1527 26.1351 18.8112 26.1481 16.0741 26.1481C13.3369 26.1481 12.9954 26.1381 11.9215 26.0877C10.8487 26.0373 10.1183 25.8681 9.47556 25.6193C8.80294 25.3669 8.19366 24.9704 7.69043 24.4577C7.17807 23.9542 6.78168 23.345 6.52889 22.6726C6.27905 22.0309 6.11081 21.2995 6.06044 20.2266C6.0131 19.1527 6 18.8112 6 16.0741C6 13.3369 6.01007 12.9954 6.06044 11.9215C6.11081 10.8476 6.27905 10.1183 6.52889 9.47556C6.78098 8.80279 7.17746 8.19345 7.69043 7.69043C8.1938 7.17789 8.80304 6.78148 9.47556 6.52889C10.1183 6.27905 10.8476 6.11081 11.9215 6.06044C12.9954 6.0131 13.3369 6 16.0741 6ZM16.0741 11.037C14.7382 11.037 13.457 11.5677 12.5124 12.5124C11.5677 13.457 11.037 14.7382 11.037 16.0741C11.037 17.41 11.5677 18.6912 12.5124 19.6358C13.457 20.5804 14.7382 21.1111 16.0741 21.1111C17.41 21.1111 18.6912 20.5804 19.6358 19.6358C20.5804 18.6912 21.1111 17.41 21.1111 16.0741C21.1111 14.7382 20.5804 13.457 19.6358 12.5124C18.6912 11.5677 17.41 11.037 16.0741 11.037ZM22.6222 10.7852C22.6222 10.4512 22.4896 10.1309 22.2534 9.89475C22.0172 9.6586 21.6969 9.52593 21.363 9.52593C21.029 9.52593 20.7087 9.6586 20.4725 9.89475C20.2364 10.1309 20.1037 10.4512 20.1037 10.7852C20.1037 11.1192 20.2364 11.4395 20.4725 11.6756C20.7087 11.9118 21.029 12.0444 21.363 12.0444C21.6969 12.0444 22.0172 11.9118 22.2534 11.6756C22.4896 11.4395 22.6222 11.1192 22.6222 10.7852ZM16.0741 13.0519C16.8756 13.0519 17.6443 13.3703 18.2111 13.937C18.7779 14.5038 19.0963 15.2725 19.0963 16.0741C19.0963 16.8756 18.7779 17.6443 18.2111 18.2111C17.6443 18.7779 16.8756 19.0963 16.0741 19.0963C15.2725 19.0963 14.5038 18.7779 13.937 18.2111C13.3703 17.6443 13.0519 16.8756 13.0519 16.0741C13.0519 15.2725 13.3703 14.5038 13.937 13.937C14.5038 13.3703 15.2725 13.0519 16.0741 13.0519Z"
                fill="#E8D8CB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_328">
                <rect width="32" height="32" rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          aria-label="linkedin"
          href={"https://www.linkedin.com/company/map-dxb/posts"}
          target={"_blank"}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#A67A46" />
            <path
              d="M6.65428 26.1481H9.2736C9.63497 26.1481 9.92788 25.8275 9.92788 25.4319V12.8985C9.92788 12.5029 9.63497 12.1823 9.2736 12.1823H6.65428C6.29288 12.1823 6 12.5029 6 12.8985V25.4319C6 25.8274 6.29288 26.1481 6.65428 26.1481Z"
              fill="#E8D8CB"
            />
            <path
              d="M6.65428 9.97876H9.2736C9.63497 9.97876 9.92788 9.6581 9.92788 9.26252V6.71624C9.92788 6.32065 9.63497 6 9.2736 6H6.65428C6.29288 6 6 6.32065 6 6.71624V9.26252C6 9.6581 6.29288 9.97876 6.65428 9.97876Z"
              fill="#E8D8CB"
            />
            <path
              d="M25.1628 13.636C24.7947 13.1056 24.252 12.6694 23.5344 12.3275C22.8167 11.9859 22.0246 11.8149 21.1579 11.8149C19.3986 11.8149 17.9078 12.55 16.6856 14.0203C16.4424 14.3129 16.2656 14.2489 16.2656 13.8533V12.8985C16.2656 12.5029 15.9726 12.1822 15.6113 12.1822H13.2715C12.9101 12.1822 12.6172 12.5029 12.6172 12.8985V25.4319C12.6172 25.8274 12.9101 26.1481 13.2715 26.1481H15.8908C16.2522 26.1481 16.5451 25.8274 16.5451 25.4319V21.0731C16.5451 19.2572 16.6452 18.0125 16.8456 17.3393C17.0458 16.666 17.4164 16.1254 17.9568 15.7173C18.4974 15.3092 19.1077 15.1051 19.7881 15.1051C20.3192 15.1051 20.7736 15.2479 21.1511 15.5337C21.5285 15.8194 21.8011 16.2196 21.9688 16.7349C22.1367 17.2501 22.2205 18.385 22.2205 20.1397V25.4318C22.2205 25.8274 22.5134 26.1481 22.8747 26.1481H25.4941C25.8554 26.1481 26.1483 25.8274 26.1483 25.4318V18.3339C26.1483 17.0792 26.0761 16.1151 25.9318 15.4418C25.7875 14.7686 25.5311 14.1666 25.1628 13.636Z"
              fill="#E8D8CB"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
