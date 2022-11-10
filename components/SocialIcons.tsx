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
      <li key={social.id}>
        <Link href={social.link}>
          <FontAwesomeIcon icon={social.icon} />
        </Link>
      </li>
    );
  });

  return <ul>{social}</ul>;
};

export default SocialIcons;
