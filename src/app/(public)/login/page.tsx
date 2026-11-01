import type { Metadata } from "next";
import AuthScreen from "../../../components/auth-screen";

export const metadata: Metadata = {
  title: "Sign in | Make My Marriage",
  description: "Sign in to your Make My Marriage workspace.",
};

export default function LoginPage() {
  return <AuthScreen mode="login" />;
}
