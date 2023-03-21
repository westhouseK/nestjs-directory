import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from '../service/task.service';

import { Task } from '../model/task.model';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(() => Task)
  getTask() {
    return this.taskService.find();
  }
}
