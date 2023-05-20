import SocialProfile from "@/components/Social";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";

const MEMBER_MSG = "Already a member? ";
const LOGIN = "Login";
const REGISTER_TITLE = "Join thousands of learners from around the world";
const REGISTER_MSG =
  "Master web development by making real life projects. There are mutiple paths for you to choose";
const REGISTER_BTN = "Start coding now";

export default function Register() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/devchallenges.svg"
          width={50}
          height={10}
          alt="devchallenge logo"
          className="h-6 w-auto"
        />
        <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {REGISTER_TITLE}
        </h2>
      </div>
      <div className="mt-1">{REGISTER_MSG}</div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form buttonText={REGISTER_BTN} />
        <SocialProfile />
        <p className="mt-10 text-center text-sm text-gray-500">
          {MEMBER_MSG}
          <Link
            href="/login"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-600"
          >
            {LOGIN}
          </Link>
        </p>
      </div>
    </div>
  );
}
