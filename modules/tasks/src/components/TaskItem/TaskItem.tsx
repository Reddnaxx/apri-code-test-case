import { ArrowSvg, Checkbox, IconButton, VertMenuSvg } from '@app/ui';
import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ITask } from '../../interfaces/task.interface';
import { tasksStore } from '../../store/store';
import { TaskMenu } from '../TaskMenu/TaskMenu';
import { TaskItemChildren } from './components/TaskItemChildren/TaskItemChildren';

type TaskItemProps = Pick<ITask, 'id' | 'title'> & {
  className?: string;
};

export const TaskItem = observer(({ id, title, className }: TaskItemProps) => {
  const store = tasksStore;
  const children = store.findTaskChildren(id);
  const completed = store.findTaskById(id)?.completed ?? false;

  const hasChildren = useMemo(() => children?.length > 0, [children]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateParent = () => {
    const parent = store.tasks.find(task => task.children?.includes(id));
    if (!parent?.children) return;

    const allChildrenCompleted = parent.children.every(
      childId => store.findTaskById(childId)?.completed
    );

    store.updateTask(parent.id, { completed: allChildrenCompleted });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    store.updateTask(id, { completed: !completed });

    if (children) {
      for (const child of children) {
        store.updateTask(child.id, { completed: !completed });
      }
    }

    updateParent();
  };

  const handleExpand = (e: MouseEvent<HTMLButtonElement>) => {
    setIsExpanded(!isExpanded);
    e.preventDefault();
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="relative flex h-full min-h-10 items-center gap-3 p-2 text-base font-medium">
        <NavLink
          to={`${id}`}
          className={({ isActive }) =>
            cn('absolute inset-0 flex items-center', className, {
              'bg-[#F7FBFD]': isActive,
            })
          }
        >
          {hasChildren && (
            <button onClick={handleExpand} className="absolute left-2">
              <ArrowSvg
                width={16}
                height={16}
                className={cn('transition-transform', {
                  'rotate-90': !isExpanded,
                })}
              />
            </button>
          )}
          <p className="pl-9">{title}</p>
        </NavLink>
        <Checkbox
          className="absolute right-10" // Позиционируем поверх NavLink
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <IconButton onClick={handleMenuOpen} className="absolute right-2">
          <VertMenuSvg width={24} height={24} />
        </IconButton>
        <TaskMenu
          className="absolute right-2 top-full z-20"
          taskId={id}
          setIsMenuOpen={setIsMenuOpen}
          visible={isMenuOpen}
        />
      </div>
      <TaskItemChildren
        children={children}
        visible={isExpanded && hasChildren}
      />
    </div>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
