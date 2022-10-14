import { useState } from "react";
import SignUp from "../components/SignUp";

function SignUpPage() {
  const [SignUpType, setSignUpType] = useState("buyer");
  return <SignUp signUpType={SignUpType} />;
}

export default SignUpPage;
