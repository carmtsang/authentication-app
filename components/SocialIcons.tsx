import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    link: "/",
  },
  {
    id: "github",
    icon: faGithub,
    link: "/",
  },
  {
    id: "google",
    icon: faGoogle,
    link: "/",
  },
  {
    id: "twitter",
    icon: faTwitter,
    link: "/",
  },
];

const SocialIcons = () => {
  const social = SOCIAL.map((social) => {
    return (
      <li className="inline-block  p-4" key={social.id}>
        <Link href={social.link}>
          <FontAwesomeIcon icon={social.icon} size="3x" />
        </Link>
      </li>
    );
  });

  return <ul className="list-none">{social}</ul>;
};

export default SocialIcons;
