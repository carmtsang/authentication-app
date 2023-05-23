import { createUser, getUsers } from "@lib/prisma/users";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { users, error } = await getUsers();
      if (error) throw new Error(error);
      return res.status(200).json({ users });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { user, error } = await createUser(data);
      if (error) throw new Error(error);
      return res.status(200).json({ user });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
