import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SOCIAL = [
  {
    id: "facebook",
    icon: faFacebook,
  },
  {
    id: "github",
    icon: faGithub,
  },
  {
    id: "google",
    icon: faGoogle,
  },
  {
    id: "twitter",
    icon: faTwitter,
  },
];

const SocialIcons = () => {
  const social = SOCIAL.map((social) => {
    return (
      <li className="inline-block  p-4" key={social.id}>
        <button onClick={() => signIn(social.id)}>
          <FontAwesomeIcon icon={social.icon} size="3x" />
        </button>
      </li>
    );
  });

  return <ul className="list-none">{social}</ul>;
};

export default SocialIcons;
