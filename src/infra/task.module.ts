import { Module } from '@nestjs/common';
import { TaskService } from 'src/domain/task.service';
import { TaskResolver } from 'src/presenter/task.resolver';

@Module({
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
