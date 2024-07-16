import Link from "next/link";
import { auth } from '@clerk/nextjs/server';
import { UserButton } from "@clerk/nextjs";
import "./header.css";

export default async function Header() {
    const { userId } = auth();
    return (
        <div className="header">
            <div className="nav-left">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="nav-right">
                {userId ? (
                    <div>
                        <Link href="/dashboard">Dashboard</Link>
                        <div className="user-button"><UserButton afterSignOutUrl="/about" /></div>
                    </div>
                ) : (
                    <div>
                        <Link href="/sign-in">Sign In</Link>
                        <Link href="/sign-up">Sign Up</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
