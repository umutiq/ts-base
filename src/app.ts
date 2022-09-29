import fastify, { FastifyError } from 'fastify';
import { connect } from './utils/db';
import config from './config';
import autoLoad from '@fastify/autoload';
import { join } from 'path';
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
  await app.register(autoLoad, {
    dir: join(__dirname, 'modules'),
    options: {
      prefix: '/api',
    },
  });
  await connect();
}

init().catch((err: FastifyError) => {
  logAndExit(err);
});
