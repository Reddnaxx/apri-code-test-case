import { createHash } from '@app/utils';
import { autorun, makeAutoObservable } from 'mobx';
import { ITask } from '../interfaces/task.interface';

export class TasksStore {
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

  public addTask = (task: Omit<ITask, 'id'>, parentId?: string): void => {
    const id = createHash({ ...task, id: Date.now().toString() });

    const oldTasks = this._tasks;

    this._tasks = [...oldTasks, { ...task, id }];

    if (parentId) {
      const parent = this._tasks.find(t => t.id === parentId);
      if (parent) {
        parent.children ??= [];
        parent.children = [...parent.children, id];
      }
      return;
    }
  };

  public updateTask = (id: string, updatedFields: Partial<ITask>): void => {
    const task = this.findTaskById(id);
    if (task) {
      Object.assign(task, updatedFields);
    }
  };

  public removeTask = (id: string): void => {
    const children = this.findTaskChildren(id);

    for (const child of children) {
      this.removeTask(child.id);
    }

    const parent = this._tasks.find(t => t.children?.includes(id));

    if (parent) {
      parent.children = parent.children?.filter(child => child !== id);
    }

    this._tasks = this._tasks.filter(task => task.id !== id);
  };

  public findTaskById = (id: string): ITask | undefined => {
    return this._tasks.find(task => task.id === id);
  };

  public searchTasksByContent = (search: string): ITask[] => {
    const lowerSearch = search.toLowerCase();

    const matchesSearch = (task: ITask) =>
      task.title.toLowerCase().includes(lowerSearch) ||
      task.text.toLowerCase().includes(lowerSearch);

    const result = this._tasks.filter(matchesSearch);

    return result;
  };

  public findTaskChildren = (id: string): ITask[] => {
    const task = this.findTaskById(id);
    if (!task) return [];

    const result: ITask[] = [];
    const childrenIds = task.children ?? [];
    for (const childId of childrenIds) {
      const childTask = this._tasks.find(t => t.id === childId);
      if (childTask) {
        result.push(childTask);
      }
    }

    return result;
  };

  public toJson = (): string => {
    return JSON.stringify(this._tasks);
  };
}

export const tasksStore = new TasksStore();

autorun(() => {
  localStorage.setItem('tasks', tasksStore.toJson());
});
