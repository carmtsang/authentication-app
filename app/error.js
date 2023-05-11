"use client";

import { useEffect } from "react";

export const ERROR_TITLE = "Something went wrong!";
export const RETRY = "Try again";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>{ERROR_TITLE}</h2>
      <button onClick={() => reset()}>{RETRY}</button>
    </div>
  );
}
