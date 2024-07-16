import { SignUp } from "@clerk/nextjs";
import "./signup.css";

export default function Page() {
  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign Up Page</h1>
      <SignUp />
    </div>
  );
}
