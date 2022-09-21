import { envSchema } from 'env-schema';
import { Type, Static } from '@sinclair/typebox';
const schema = Type.Object({
  DB_URI: Type.String({
    default: 'mongodb://localhost:27017',
  }),
});

type Schema = Static<typeof schema>;

export default envSchema<Schema>({
  schema,
  dotenv: true,
});
