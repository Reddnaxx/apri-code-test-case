import { autorun } from 'mobx';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ITask } from '../interfaces/task.interface';
import { TasksStore } from './tasks-store';

describe('TasksStore', () => {
  let store: TasksStore;

  beforeEach(() => {
    store = new TasksStore();

    localStorage.clear();

    autorun(() => {
      localStorage.setItem('tasks', store.toJson());
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('должен создавать пустой массив задач при инициализации', () => {
    expect(store.tasks).toEqual([]);
  });

  it('должен добавлять новую задачу', () => {
    const task: Omit<ITask, 'id'> = {
      title: 'Тестовая задача',
      text: 'Описание',
      completed: false,
    };
    store.addTask(task);
    expect(store.tasks).toHaveLength(1);
    expect(store.tasks[0]).toMatchObject(task);
    expect(store.tasks[0].id).toBeDefined();
  });

  it('должен обновлять существующую задачу', () => {
    const task: Omit<ITask, 'id'> = {
      title: 'Задача',
      text: 'Текст',
      completed: false,
    };

    store.addTask(task);

    const addedTask = store.tasks[0];
    const updatedFields = { title: 'Обновленная задача' };

    store.updateTask(addedTask.id, updatedFields);

    expect(store.tasks[0].title).toBe('Обновленная задача');
  });

  it('должен удалять задачу', () => {
    const task: Omit<ITask, 'id'> = {
      title: 'Задача для удаления',
      text: 'Текст',
      completed: false,
    };

    store.addTask(task);
    const addedTask = store.tasks[0];

    store.removeTask(addedTask.id);

    expect(store.tasks).toHaveLength(0);
  });

  it('должен находить задачу по id', () => {
    const task: Omit<ITask, 'id'> = {
      title: 'Найти эту задачу',
      text: 'Текст',
      completed: false,
    };

    store.addTask(task);

    const addedTask = store.tasks[0];
    const foundTask = store.findTaskById(addedTask.id);

    expect(foundTask).toEqual(addedTask);
  });

  it('должен искать задачи по содержимому', () => {
    store.addTask({ title: 'Задача 1', text: 'Текст 1', completed: false });
    store.addTask({
      title: 'Задача 2',
      text: 'Особый текст',
      completed: false,
    });

    const results = store.searchTasksByContent('особый');

    expect(results).toHaveLength(1);
    expect(results[0].title).toBe('Задача 2');
  });

  it('должен находить дочерние задачи', () => {
    const parentTask: Omit<ITask, 'id'> = {
      title: 'Родительская задача',
      text: 'Текст',
      completed: false,
    };
    store.addTask(parentTask);
    const parentId = store.tasks[0].id;

    const childTask: Omit<ITask, 'id'> = {
      title: 'Дочерняя задача',
      text: 'Текст',
      completed: false,
    };
    store.addTask(childTask, parentId);

    const children = store.findTaskChildren(parentId);

    expect(children).toHaveLength(1);
    expect(children[0].title).toBe('Дочерняя задача');
  });

  it('должен возвращать только родительские задачи', () => {
    store.addTask({
      title: 'Родительская задача 1',
      text: 'Текст',
      completed: false,
    });
    store.addTask({
      title: 'Родительская задача 2',
      text: 'Текст',
      completed: false,
    });

    const parentId = store.tasks[0].id;

    store.addTask(
      { title: 'Дочерняя задача', text: 'Текст', completed: false },
      parentId
    );

    expect(store.parentTasks).toHaveLength(2);
  });

  it('должен сериализовать задачи в JSON', () => {
    store.addTask({
      title: 'Задача для JSON',
      text: 'Текст',
      completed: false,
    });

    const json = store.toJson();

    expect(JSON.parse(json)).toEqual(store.tasks);
  });

  it('должен загружать задачи из localStorage при инициализации', () => {
    const localStorageTasks = [
      {
        id: 'task1',
        title: 'Задача из localStorage',
        text: 'Текст',
        completed: false,
      },
    ];

    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(
      JSON.stringify(localStorageTasks)
    );

    const newStore = new TasksStore();

    expect(newStore.tasks).toEqual(localStorageTasks);
  });

  it('должен сохранять задачи в localStorage при изменении', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    store.addTask({ title: 'Новая задача', text: 'Текст', completed: false });

    expect(setItemSpy).toHaveBeenCalledWith('tasks', expect.any(String));
    const savedTasks = JSON.parse(setItemSpy.mock.calls[0][1] as string);
    expect(savedTasks).toEqual(store.tasks);
  });
});
