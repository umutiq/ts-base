import fastify, { FastifyError } from 'fastify';
import { connect } from './utils/db';
import * as config from './config';
import user from './modules/user';
import { UserModel } from './modules/user/model';
import { logAndExit } from './utils/errors';

const app = fastify();

async function init(): Promise<void> {
  await app.listen(
    {
      port: config.app.PORT,
    },
    (err, address) => {
      if (err !== null) {
        logAndExit(err);
      }
      console.log(`Server listening at ${address}`);
    },
  );
  await app.register(
    async (instance, opts, done) => {
      await instance.register(user);
      done();
    },
    { prefix: '/api' },
  );
  await connect();
  await UserModel.create({ name: 'test' });
}

init().catch((err: FastifyError) => {
  logAndExit(err);
});
