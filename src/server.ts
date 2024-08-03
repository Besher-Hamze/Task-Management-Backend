import Fastify from 'fastify';
import dotenv from 'dotenv';
import connectDB from './utils/database';
import taskRoutes from './routes/taskRoutes';
import authRoutes from './routes/authRoutes';
import fastifyHelmet from '@fastify/helmet';
import fastifyCors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';
import fastifyJwt from '@fastify/jwt';

dotenv.config();

const server = Fastify({ logger: true });

// Register Plugins
server.register(fastifyHelmet);
server.register(fastifyCors);
server.register(fastifyFormbody);
server.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'd3b07384d113edec49eaa6238ad5ff00b204e9800998ecf8427e',
    sign: {
      expiresIn: '10s'
    }
  });

// Register Routes
server.register(taskRoutes, { prefix: '/api/tasks' });
server.register(authRoutes, { prefix: '/api/auth' });

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskmanager';
connectDB(mongoUri);

// Start Server
const start = async () => {
  try {
    await server.listen({ port: parseInt(process.env.PORT || '5000', 10), host: '0.0.0.0' });
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
