import { Checkbox, IconButton } from '@app/ui';
import { ITask } from '../../interfaces/task.interface';
import { useState } from 'react';
import { cn } from '@app/lib';

type TaskItemProps = ITask & {};

export function TaskItem({ title, completed, children }: TaskItemProps) {
  const [checked, setChecked] = useState(completed);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-[20vw]">
      <div className="relative flex items-center gap-3 p-2">
        {children && children.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute"
          >
            <img
              src="/svg/arrow.svg"
              alt="expand"
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
          checked={checked}
          onChange={e => setChecked(e.currentTarget.checked)}
        />
        <IconButton>
          <img
            src="/svg/vert-menu.svg"
            alt="open menu"
            width={24}
            height={24}
          />
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
}

export default TaskItem;
