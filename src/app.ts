import fastify, { FastifyError } from 'fastify';
import * as config from './config';
import user from './modules/user';

const app = fastify();

async function init(): Promise<void> {
  await app.listen(
    {
      port: config.app.PORT,
    },
    (err, address) => {
      if (err !== null && err !== undefined) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    },
  );
  await app.register(
    async (instance, opts, done) => {
      // @ts-expect-error
      await instance.register(user, { prefix: '/user' });
      done();
    },
    { prefix: '/api' },
  );
}

init().catch((err: FastifyError) => {
  console.error(err);
  process.exit(1);
});
