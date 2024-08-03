import taskRepository from '../repositories/taskRepository';
import { Task as TaskType } from '../types/taskTypes';

class TaskService {
  async getAllTasks(): Promise<TaskType[]> {
    return taskRepository.getAllTasks();
  }

  async createTask(task: TaskType): Promise<TaskType> {
    return taskRepository.createTask(task);
  }

  async getTaskById(id: string): Promise<TaskType | null> {
    return taskRepository.getTaskById(id);
  }

  async updateTask(id: string, task: Partial<TaskType>): Promise<TaskType | null> {
    return taskRepository.updateTask(id, task);
  }

  async deleteTask(id: string): Promise<TaskType | null> {
    return taskRepository.deleteTask(id);
  }
}

export default new TaskService();
