import { envSchema } from 'env-schema';
import { Type, Static } from '@sinclair/typebox';
const schema = Type.Object({
  PORT: Type.String({
    default: '3000',
  }),
});

type Schema = Static<typeof schema>;

export default envSchema<Schema>({
  schema,
  dotenv: true,
});
