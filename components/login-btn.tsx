import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="border p-2 m-1" onClick={() => signOut()}>
          Sign Out
        </button>
      </>
    );
  }

  return (
    <button className="border p-2 m-1" onClick={() => signIn()}>
      Sign In
    </button>
  );
};
