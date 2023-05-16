"use client";

import Image from "next/image";

const SOCIAL_PROFILE_TXT = "or continue with these social profile";
const SOCIAL_ICONS = [
  {
    name: "Google",
    image: "/Google.svg",
  },
  {
    name: "Facebook",
    image: "/Facebook.svg",
  },
  {
    name: "Twitter",
    image: "/Twitter.svg",
  },
  {
    name: "Github",
    image: "/Github.svg",
  },
];

export default function SocialProfile() {
  return (
    <>
      <p className="mt-10 text-center text-sm text-gray-500">
        {SOCIAL_PROFILE_TXT}
      </p>
      {SOCIAL_ICONS.map((icon) => (
        <Image
          key={icon.name}
          src={icon.image}
          alt={icon.name}
          width={50}
          height={50}
        />
      ))}
    </>
  );
}
