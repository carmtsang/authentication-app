"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-3">
      <Image
        src="/devchallenges.svg"
        width={50}
        height={10}
        alt="devchallenge logo"
        className="h-5 w-auto"
      />
      <div className="flex">
        <Image src="/" width={50} height={10} alt="user" />
        <span>USER NAME</span>
      </div>
    </nav>
  );
}
