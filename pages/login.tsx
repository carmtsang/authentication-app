import { LockClosedIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Image from "next/image";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Log In</title>
      </Head>

      <main className="flex justify-center py-12 mt-36">
        <div>
          <div className="bg-white py-10 shadow-xl ring-1 ring-gray-900/5  sm:rounded-lg sm:px-10">
            <div className="w-full max-w-md space-y-8 ">
              {/* <Image
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={300}
                height={300}
              /> */}
              <p className="mt-2 text-sm text-gray-600">Company Name</p>
              <h2 className="mt-3 text-2xl tracking-tight text-gray-900">
                Login
              </h2>
            </div>

            <form className="mt-4 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
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
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>

            <div className="flex-row items-center justify-between font-small text-gray-600">
              <div className="flex items-center">
                <p>or continue with these social profile</p>
              </div>
              <div>
                <p>social icons go here</p>
              </div>

              <div className="flex items-center mt-7 ">
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
