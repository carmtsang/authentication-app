import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="header">
      <Link href="/">LOGO</Link>
      {session && (
        <>
          Signed in as {session.user.email} <br />{" "}
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      )}
      {!session && <button onClick={() => signIn()}>Sign In</button>}
    </div>
  );
};
