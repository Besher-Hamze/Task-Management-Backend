import { FastifyInstance } from 'fastify';
import { getAllTasks, createTask, getTaskById, updateTask, deleteTask } from '../controllers/taskController';

async function taskRoutes(fastify: FastifyInstance) {
    fastify.addHook('preHandler', async (request, reply) => {
        try {
          await request.jwtVerify();
        } catch (err) {
          reply.send(err);
        }
      });
    
  fastify.get('/', getAllTasks);
  fastify.post('/', createTask);
  fastify.get('/:id', getTaskById);
  fastify.put('/:id', updateTask);
  fastify.delete('/:id', deleteTask);
}

export default taskRoutes;
