import { FastifyInstance } from 'fastify';
import { register, login } from '../controllers/authController';

async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/register', register);
  fastify.post('/login', login);
}
export default authRoutes;
