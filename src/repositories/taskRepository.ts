import Task from '../models/taskModel';
import { Task as TaskType } from '../types/taskTypes';

class TaskRepository {
  async getAllTasks(): Promise<TaskType[]> {
    return Task.find();
  }

  async createTask(task: TaskType): Promise<TaskType> {
    return Task.create(task);
  }

  async getTaskById(id: string): Promise<TaskType | null> {
    return Task.findById(id);
  }

  async updateTask(id: string, task: Partial<TaskType>): Promise<TaskType | null> {
    return Task.findByIdAndUpdate(id, task, { new: true });
  }

  async deleteTask(id: string): Promise<TaskType | null> {
    return Task.findByIdAndDelete(id);
  }
}

export default new TaskRepository();
