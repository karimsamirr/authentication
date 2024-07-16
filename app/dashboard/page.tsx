import { auth, currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import "./dashboard.css";

export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return <div className="container">You are not logged in</div>;
  }
  const user = await currentUser();

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome : {user?.firstName}</h1>
        <p className="info">Your Last Name: {user?.lastName}</p>
        <p className="info">Your Username: {user?.username}</p>
       
       
      </div>
    </div>
  );
}
