import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import Controller from './controller';

async function routes(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {
  await fastify.register((instance, opts, done) => {
    instance.get('/', Controller.getUsers);
    instance.post('/', Controller.createUser);
    instance.get('/:id', Controller.getUser);
    done();
  });
}
export default routes;
