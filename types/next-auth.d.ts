import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";
import { Session } from "next-auth";
import { JWT } from "next-auth";

declare module "next-auth" {
  // Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
  interface Session {
    user: {
      name: string;
      email: string;
    } & DefaultSession["user"];
  }
}
