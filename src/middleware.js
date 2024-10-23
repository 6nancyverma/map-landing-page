// import { NextResponse, userAgent } from "next/server";

// export const config = {
//   matcher: ["/", "/(en|ar|ru)/:path*"],
// };

// export function middleware(req) {
//   const { device } = userAgent(req);
//   const { pathname } = req.nextUrl;

//   const viewport = device.type === "mobile" ? "mobile" : "desktop";

//   const hasSeenPopup = req.cookies.get("hasSeenPopup") === "true";

//   if (!hasSeenPopup) {
//     if (viewport === "mobile") {
//       return NextResponse.redirect(new URL("/mobile-popup", req.url));
//     } else {
//       return NextResponse.redirect(new URL("/desktop-popup", req.url));
//     }
//   } else {
//     req.nextUrl.pathname = `/${viewport}${pathname}`;
//     return NextResponse.rewrite(req.nextUrl);
//   }
// }

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en|ru)/:path*"],
};
