import { FastifyReply, FastifyRequest } from 'fastify';
import UserService from './service';

type GetUserRequest = FastifyRequest<{
  Params: {
    id: number;
  };
}>;

async function getUser(request: GetUserRequest, reply: FastifyReply): Promise<void> {
  const { id } = request.params;
  const user = await UserService.getUser(id);
  await reply.send({ user });
}

async function getUsers(request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const users = await UserService.getUsers();
  await reply.send({ users });
}

export default {
  getUser,
  getUsers,
};
