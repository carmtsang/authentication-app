import Image from "next/image";
import Link from "next/link";

import Form from "@/app/components/form";
import SocialProfile from "@/app/components/Social";

const NO_ACC_MSG = "Don't have an account yet? ";
const REGISTER = "Register";
const LOGIN = "Login";

export default function Login() {
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
          {LOGIN}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form buttonText={LOGIN} />
        <SocialProfile />
        <p className="mt-10 text-center text-sm text-gray-500">
          {NO_ACC_MSG}
          <Link
            href="/register"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-600"
          >
            {REGISTER}
          </Link>
        </p>
      </div>
    </div>
  );
}
