import { SignIn } from "@clerk/nextjs";
import "./signin.css";

export default function Page() {
  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign In Page</h1>
      <SignIn />
    </div>
  );
}
