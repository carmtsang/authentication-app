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

      <main>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div>
            <div className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div className="w-full max-w-md space-y-8 ">
                {/* <Image
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={300}
                height={300}
              /> */}

                <h2 className="mt-3 text-2xl tracking-tight text-gray-900">
                  Login
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600"></p>
              </div>

              <form className="mt-8 space-y-6" action="#" method="POST">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// https://blog.logrocket.com/implementing-user-authorization-next-js/
