import { FastifyRequest, FastifyReply } from 'fastify';
import userService from '../services/userService';
import { User as UserType } from '../types/userTypes';

export const register = async (request: FastifyRequest, reply: FastifyReply) => {
  const { username, password } = request.body as UserType;
  try {
    const newUser = await userService.register({ username, password });
    reply.status(201).send({ message: 'User registered', user: newUser });
  } catch (err) {
    reply.status(400).send({ message: err.message });
  }
};

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const { username, password } = request.body as UserType;
  try {
    const user = await userService.login(username, password);
    if (!user) {
      reply.status(401).send({ message: 'Invalid credentials' });
      return;
    }
    const token = await reply.jwtSign({ id: user._id, username: user.username });
    reply.send({ token });
  } catch (err) {
    reply.status(500).send({ message: err.message });
  }
};
