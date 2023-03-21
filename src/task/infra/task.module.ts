import { Module } from '@nestjs/common';
import { TaskResolver } from '../presenter/task.resolver';
import { TaskService } from '../domain/task.service';

@Module({
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
