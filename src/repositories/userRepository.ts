import User from '../models/userModel';
import { User as UserType } from '../types/userTypes';

class UserRepository {
  async findUserByUsername(username: string): Promise<UserType | null> {
    return User.findOne({ username });
  }

  async createUser(user: UserType): Promise<UserType> {
    return User.create(user);
  }
}

export default new UserRepository();
