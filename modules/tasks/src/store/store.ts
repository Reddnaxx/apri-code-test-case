import { makeAutoObservable } from 'mobx';
import { ITask } from '../interfaces/task.interface';

class TasksStore {
  private _tasks: ITask[] = [];

  public get tasks(): ITask[] {
    return this._tasks;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public addTask(task: ITask, parentId?: string): void {
    if (parentId) {
      const parent = this._tasks.find(t => t.id === parentId);
      if (parent) {
        parent.children ??= [];
        parent.children = [...parent.children, task];
      }
      return;
    }
    this._tasks = [...this._tasks, task];
  }

  public removeTask(id: string): void {
    const removeTaskRecursive = (tasks: ITask[]): ITask[] => {
      return tasks.filter(task => {
        if (task.id === id) {
          return false;
        }
        if (task.children) {
          task.children = removeTaskRecursive(task.children);
        }
        return true;
      });
    };

    this._tasks = removeTaskRecursive(this._tasks);
  }
}

export const tasksStore = new TasksStore();
