import { ITask, TaskList } from '@app/tasks';

const tasks: ITask[] = [
  {
    id: '1',
    title: 'Task 1',
    text: 'Task 1',
    completed: false,
    children: [
      {
        id: '2',
        title: 'Task 1.1',
        text: 'Task 1.1',
        completed: true,
      },
      {
        id: '5',
        title: 'Task 1.2',
        text: 'Task 1.2',
        completed: false,
        children: [
          {
            id: '6',
            title: 'Task 1.2.1',
            text: 'Task 1.2.1',
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Task 2',
    text: 'Task 2',
    completed: false,
    children: [
      {
        id: '4',
        title: 'Task 2.1',
        text: 'Task 2.1',
        completed: false,
      },
    ],
  },
];

export function App() {
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
