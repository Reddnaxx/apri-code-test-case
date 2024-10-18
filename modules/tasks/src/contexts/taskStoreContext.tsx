import { createContext, FC, PropsWithChildren, useContext } from 'react';

import { TasksStore, tasksStore } from '../store/tasks-store';

const TaskContext = createContext<TasksStore | null>(null);

export const TaskStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TaskContext.Provider value={tasksStore}>{children}</TaskContext.Provider>
  );
};

export const useTaskStore = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(
      'useTaskStore должен использоваться внутри TaskStoreProvider'
    );
  }
  return context;
};
