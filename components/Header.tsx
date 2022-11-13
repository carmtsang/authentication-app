import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const handleSignIn = (e: any) => {
    e.preventDefault();
    signIn();
  };

  const handleSignOut = (e: any) => {
    e.preventDefault();
    signOut;
  };

  const { data: session } = useSession();

  return (
    <div className="header">
      <Link href="/">LOGO</Link>
      {session && (
        <a href="#" onClick={handleSignOut}>
          Sign Out
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignIn}>
          Sign In
        </a>
      )}
    </div>
  );
};
