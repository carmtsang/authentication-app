"use client";

import Image from "next/image";
import Link from "next/link";

const SOCIAL_PROFILE_TXT = "or continue with these social profile";
const SOCIAL_ICONS = [
  {
    name: "Google",
    image: "/Google.svg",
    link: "/api/auth/google",
  },
  {
    name: "Facebook",
    image: "/Facebook.svg",
    link: "/api/auth/facebook",
  },
  {
    name: "Twitter",
    image: "/Twitter.svg",
    link: "/api/auth/twitter",
  },
  {
    name: "Github",
    image: "/Github.svg",
    link: "/api/auth/github",
  },
];

export default function SocialProfile() {
  const host = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <p className="mt-10 text-center text-sm text-gray-500">
        {SOCIAL_PROFILE_TXT}
      </p>
      <div className="mt-5 flex flex-row justify-around">
        {SOCIAL_ICONS.map((icon) => (
          <Link key={icon.name} href={`${host}${icon.link}`}>
            <Image src={icon.image} alt={icon.name} width={50} height={50} />
          </Link>
        ))}
      </div>
    </>
  );
}
