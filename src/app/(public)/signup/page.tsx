import type { Metadata } from "next";
import AuthScreen from "../../../components/auth-screen";

export const metadata: Metadata = {
  title: "Create an account | Make My Marriage",
  description: "Create a Make My Marriage workspace for your wedding plans.",
};

export default function SignupPage() {
  return <AuthScreen mode="signup" />;
}
