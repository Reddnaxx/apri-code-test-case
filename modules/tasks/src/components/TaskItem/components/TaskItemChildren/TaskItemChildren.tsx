import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { ITask } from '../../../../interfaces/task.interface';
import { TaskItem } from '../../TaskItem';

type TaskItemChildrenProps = {
  children: ITask[];
  visible: boolean;
};

export const TaskItemChildren = observer(
  ({ children, visible }: TaskItemChildrenProps) => {
    if (!visible) return null;

    return (
      <div
        className={cn(
          'w-full pl-2 animate-expand-menu overflow-hidden transition-all'
        )}
      >
        {children.map(child => (
          <TaskItem key={child.id} className="text-sm font-normal" {...child} />
        ))}
      </div>
    );
  }
);

TaskItemChildren.displayName = 'TaskItemChildren';

export default TaskItemChildren;
