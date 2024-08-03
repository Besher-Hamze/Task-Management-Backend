import bcrypt from 'bcryptjs';
import userRepository from '../repositories/userRepository';
import { User as UserType } from '../types/userTypes';

class UserService {
  async register(user: UserType): Promise<UserType> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return userRepository.createUser({ ...user, password: hashedPassword });
  }

  async login(username: string, password: string): Promise<UserType | null> {
    const user = await userRepository.findUserByUsername(username);
    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid ? user : null;
  }
}

export default new UserService();
