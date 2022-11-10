import { LockClosedIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Image from "next/image";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import SocialIcons from "../components/SocialIcons";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Log In</title>
      </Head>

      <main className="flex justify-center py-8 mt-36 ">
        <div className="w-1/3">
          <div className="bg-white py-10 shadow-xl ring-1 ring-gray-900/5  sm:rounded-lg sm:px-10">
            <div className="max-w-md space-y-8 ">
              <p className="mt-2 text-sm text-gray-600">Company Name</p>

              <h2 className="mt-3 text-2xl tracking-tight text-gray-900">
                Login
              </h2>
            </div>

            <form className="mt-3 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="space-y-px rounded-md shadow-sm">
                <div>
                  <InputLabel type="email">Email</InputLabel>
                  <Input type="email" placeholder="Email Address" />
                </div>
                <div>
                  <InputLabel type="password">Password</InputLabel>
                  <Input type="password" placeholder="Password" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="flex-row text-center items-center mt-5 text-sm text-gray-500">
              <p>or continue with these social profile</p>
              <div className="flex justify-center pt-4">
                <SocialIcons />
              </div>

              <div className="flex justify-center mt-7 ">
                <p className="pr-2">Don&#39;t have an account yet? </p>
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// https://blog.logrocket.com/implementing-user-authorization-next-js/
