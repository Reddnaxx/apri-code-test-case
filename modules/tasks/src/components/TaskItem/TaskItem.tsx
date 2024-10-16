import { ArrowSvg, Checkbox, IconButton, VertMenuSvg } from '@app/ui';
import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { ITask } from '../../interfaces/task.interface';

type TaskItemProps = ITask & {};

export const TaskItem = observer(
  ({ title, completed, children }: TaskItemProps) => {
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
            checked={checked}
            onChange={e => setChecked(e.currentTarget.checked)}
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
  }
);

TaskItem.displayName = 'TaskItem';

export default TaskItem;
