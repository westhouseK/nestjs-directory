import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from '../domain/task.service';
import { Task } from 'src/domain/task.model';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(() => Task)
  getTask() {
    return this.taskService.find();
  }
}
