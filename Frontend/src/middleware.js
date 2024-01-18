import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  let isLogin = request.cookies.get("loggedin");
  if (isLogin === 'false') {
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }else{
    if(url.pathname === "/login/"){
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }
  }
}