import { authConfig } from "@/configs/auth";
import NextAuth from "next-auth";

const hendler=NextAuth(authConfig);
export {hendler as GET,hendler as POST}