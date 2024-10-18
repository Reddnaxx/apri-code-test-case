import { tasksStore } from '@app/tasks';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from './Layout/Layout';
import TaskPage from './TaskPage/TaskPage';

const store = tasksStore;

export const router = createBrowserRouter([
  {
    path: '/apri-code-test-case',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <div className="mt-9 text-center text-xl">Выберите задачу</div>
        ),
      },
      {
        path: ':id',
        element: <TaskPage />,
        loader: ({ params }) => {
          if (!params.id) {
            return redirect('/apri-code-test-case/404');
          }

          const task = store.findTaskById(params.id);
          return task ?? redirect('/apri-code-test-case/404');
        },
      },
      {
        path: '404',
        element: <p className="mt-9 text-center text-xl">Задача не найдена</p>,
      },
    ],
  },
]);
