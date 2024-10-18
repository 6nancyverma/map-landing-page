import { NextResponse, userAgent } from "next/server";

// Set pathname were middleware will be executed
export const config = {
  matcher: ["/"],
};

export function middleware(req) {
  // Parse user agent
  const { device } = userAgent(req);
  const { pathname } = req.nextUrl;

  // Check the viewport
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  // return NextResponse.next()
  req.nextUrl.pathname = viewport + pathname;

  return NextResponse.rewrite(req.nextUrl);
}
