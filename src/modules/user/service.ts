async function getUser(user: number): Promise<number> {
  return user;
}

async function getUsers(): Promise<number[]> {
  return [1, 2, 3];
}

export default {
  getUser,
  getUsers,
};
