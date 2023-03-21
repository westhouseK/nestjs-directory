import { Injectable } from '@nestjs/common';
import { Task } from '../model/task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  find() {
    const task = new Task();
    task.id = uuid();
    task.name = 'タスク1';
    task.remarks = 'メモ';
    return task;
  }
}
