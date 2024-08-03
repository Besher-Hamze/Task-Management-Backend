import { Schema, model, Document } from 'mongoose';

interface Task extends Document {
  title: string;
  description: string;
  status: string;
  name: string;
}

const taskSchema = new Schema<Task>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  name: { type: String, required: true },
});

export default model<Task>('Task', taskSchema);
