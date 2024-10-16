import { autorun, makeAutoObservable } from 'mobx';
import { ITask } from '../interfaces/task.interface';

class TasksStore {
  private _tasks: ITask[];

  public get tasks(): ITask[] {
    return this._tasks;
  }

  public get parentTasks(): ITask[] {
    return this._tasks.filter(
      task => !this._tasks.some(t => t.children?.includes(task.id))
    );
  }

  constructor() {
    const localTasks = localStorage.getItem('tasks');
    this._tasks = localTasks ? JSON.parse(localTasks) : [];

    makeAutoObservable(this);
  }

  public addTask(task: ITask, parentId?: string): void {
    this._tasks = [...this._tasks, task];

    if (parentId) {
      const parent = this._tasks.find(t => t.id === parentId);
      if (parent) {
        parent.children ??= [];
        parent.children = [...parent.children, task.id];
      }
      return;
    }
  }

  public updateTask(id: string, updatedFields: Partial<ITask>): void {
    const task = this.findTaskById(id);
    if (task) {
      Object.assign(task, updatedFields);
    }
  }

  public findTaskById(id: string): ITask | undefined {
    return this._tasks.find(task => task.id === id);
  }

  public findTaskChildren(id: string): ITask[] {
    const task = this.findTaskById(id);
    if (!task) return [];

    const result: ITask[] = [];
    const children = task.children ?? [];
    for (const child of children) {
      const childTask = this._tasks.find(t => t.id === child);
      if (childTask) {
        result.push(childTask);
      }
    }

    return result;
  }

  public toJson(): string {
    return JSON.stringify(this._tasks);
  }
}

export const tasksStore = new TasksStore();

autorun(() => {
  localStorage.setItem('tasks', tasksStore.toJson());
});
