import {
  AddSvg,
  DeleteSvg,
  EditSvg,
  Menu,
  MenuButton,
  MenuProps,
  useModalContext,
} from '@app/ui';
import { observer } from 'mobx-react-lite';
import { EditTaskModal } from '../../modals/EditTaskModal/EditTaskModal';
import { NewTaskModal } from '../../modals/NewTaskModal/NewTaskModal';
import { RemoveTaskModal } from '../../modals/RemoveTaskModal/RemoveTaskModal';

type TaskMenuProps = Omit<MenuProps, 'children'> & {
  taskId: string;
};

export const TaskMenu = observer(
  ({ className, setIsMenuOpen, visible, taskId }: TaskMenuProps) => {
    const { openModal } = useModalContext();

    const handleNewTask = () => {
      setIsMenuOpen(false);
      openModal(<NewTaskModal parentId={taskId} />);
    };

    const handleRemoveTask = () => {
      setIsMenuOpen(false);
      openModal(<RemoveTaskModal taskId={taskId} />);
    };

    const handleEditTask = () => {
      setIsMenuOpen(false);
      openModal(<EditTaskModal taskId={taskId} />);
    };

    return (
      <Menu
        setIsMenuOpen={setIsMenuOpen}
        visible={visible}
        className={className}
      >
        <MenuButton onClick={handleEditTask}>
          <EditSvg width={24} height={24} className="dark:fill-white" />
          Редактировать
        </MenuButton>
        <MenuButton onClick={handleNewTask}>
          <AddSvg width={24} height={24} className="dark:stroke-white" />
          Добавить подзадачу
        </MenuButton>
        <MenuButton onClick={handleRemoveTask}>
          <DeleteSvg width={24} height={24} className="dark:stroke-white" />
          Удалить
        </MenuButton>
      </Menu>
    );
  }
);

TaskMenu.displayName = 'TaskMenu';

export default TaskMenu;
