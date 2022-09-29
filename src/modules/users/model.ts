import { getModelForClass, prop } from '@typegoose/typegoose';

class User {
  @prop()
  public name?: string;
}

export const UserModel = getModelForClass(User);
