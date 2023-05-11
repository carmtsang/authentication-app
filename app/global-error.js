"use client";

import { ERROR_TITLE, RETRY } from "./error";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>{ERROR_TITLE}</h2>
        <button onClick={() => reset()}>{RETRY}</button>
      </body>
    </html>
  );
}
