import { ArrowSvg, Checkbox, IconButton, VertMenuSvg } from '@app/ui';
import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { ITask } from '../../interfaces/task.interface';
import { tasksStore } from '../../store/store';

type TaskItemProps = Pick<ITask, 'id' | 'title'> & {};

export const TaskItem = observer(({ id, title }: TaskItemProps) => {
  const store = tasksStore;
  const children = store.findTaskChildren(id);
  const completed = store.findTaskById(id)?.completed ?? false;

  const [isExpanded, setIsExpanded] = useState(false);

  console.log(completed);

  const updateParent = () => {
    const parent = store.tasks.find(task => task.children?.includes(id));
    if (!parent?.children) return;

    const allChildrenCompleted = parent.children.every(
      childId => store.findTaskById(childId)?.completed
    );

    store.updateTask(parent.id, { completed: allChildrenCompleted });
  };

  const handleCheckboxChange = () => {
    store.updateTask(id, { completed: !completed });

    if (children) {
      for (const child of children) {
        store.updateTask(child.id, { completed: !completed });
      }
    }

    updateParent();
  };

  return (
    <div className="max-w-[20vw]">
      <div className="relative flex items-center gap-3 p-2">
        {children && children.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute"
          >
            <ArrowSvg
              width={16}
              height={16}
              className={cn(`transition-transform`, {
                'rotate-90': !isExpanded,
              })}
            />
          </button>
        )}
        <p className="pl-9">{title}</p>
        <Checkbox
          className="ml-auto"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <IconButton>
          <VertMenuSvg width={24} height={24} />
        </IconButton>
      </div>
      {children && children.length > 0 && isExpanded && (
        <div
          className={cn(
            'w-full pl-2 animate-expand-menu overflow-hidden transition-all'
          )}
        >
          {children.map(child => (
            <TaskItem key={child.id} {...child} />
          ))}
        </div>
      )}
    </div>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
