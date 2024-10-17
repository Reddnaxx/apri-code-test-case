import {
  AddSvg,
  DeleteSvg,
  EditSvg,
  Menu,
  MenuButton,
  MenuProps,
} from '@app/ui';
import { observer } from 'mobx-react-lite';

type TaskMenuProps = Omit<MenuProps, 'children'> & {
  taskId: string;
};

export const TaskMenu = observer(
  ({ className, setIsMenuOpen, visible, taskId }: TaskMenuProps) => {
    return (
      <Menu
        setIsMenuOpen={setIsMenuOpen}
        visible={visible}
        className={className}
      >
        <MenuButton>
          <EditSvg width={24} height={24} />
          Редактировать
        </MenuButton>
        <MenuButton>
          <AddSvg width={24} height={24} />
          Добавить подзадачу
        </MenuButton>
        <MenuButton>
          <DeleteSvg width={24} height={24} />
          Удалить
        </MenuButton>
      </Menu>
    );
  }
);

TaskMenu.displayName = 'TaskMenu';

export default TaskMenu;
