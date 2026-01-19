// middleware.ts - This allows ALL access
import { NextResponse } from "next/server";

export default function middleware() {
  return NextResponse.next(); // Allow everything
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
