import { FastifyInstance, RouteOptions } from 'fastify';
import Controller from './controller';

async function routes(fastify: FastifyInstance, options: RouteOptions): Promise<void> {
  await fastify.register((instance, opts, done) => {
    instance.get('/', Controller.getUsers);
    instance.get('/:id', Controller.getUser);
    done();
  });
}

export default routes;
