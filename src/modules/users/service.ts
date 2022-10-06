import { User, UserModel } from './model';

async function getUser(user: number): Promise<User | null> {
  return await UserModel.findOne({ _id: user });
}

async function getUsers(): Promise<User[]> {
  return await UserModel.find();
}

async function createUser(user: User): Promise<User> {
  return await UserModel.create(user);
}

export default {
  createUser,
  getUser,
  getUsers,
};
