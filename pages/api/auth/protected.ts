import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function protectedHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    return res.send({
      content:
        "This is protected content. You can access it because you are logged in",
    });
  }

  res.send({
    error: "You must be logged in to view the protected content on this page.",
  });
}
