import prisma from ".";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (e) {
    return { e };
  }
}

export async function createUser(user) {
  try {
    const userDB = await prisma.user.create({ data: user });
    return { user: userDB };
  } catch (e) {
    return { e };
  }
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return { user };
  } catch (e) {
    return { e };
  }
}
