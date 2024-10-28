import NextAuth from "next-auth";
import authConfig from "./src/auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};