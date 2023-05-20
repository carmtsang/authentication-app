"use client";

export default function Form({ buttonText }) {
  return (
    <form className="space-y-6" action="#" method="POST" onSubmit={() => {}}>
      <div>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" Email"
            onChange={() => {}}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder=" Password"
            onChange={() => {}}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          onClick={() => {}}
          className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
