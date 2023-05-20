const CREATED_BY = "created by ";
const CARMEN = "carmtsang";
const DEVCHALLENGE = "devChallenges.io";

export default function Footer() {
  return (
    <footer className="w-screen max-w-sm md:max-w-md overflow-hidden pt-4">
      <div className="flex justify-between text-sm text-gray-500">
        <p>
          {CREATED_BY}
          <a href="https://github.com/carmtsang">{CARMEN}</a>
        </p>
        <p>
          <a href="https://github.com/carmtsang">{DEVCHALLENGE}</a>
        </p>
      </div>
    </footer>
  );
}
