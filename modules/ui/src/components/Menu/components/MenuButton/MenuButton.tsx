import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const MenuButton = observer(
  forwardRef<HTMLButtonElement, MenuButtonProps>(
    ({ children, className, ...props }, ref) => {
      return (
        <button
          ref={ref}
          className="flex w-full items-center gap-4 px-4 py-3 text-left text-base transition-colors hover:bg-gray-300/50 active:bg-gray-300/70"
          {...props}
        >
          {children}
        </button>
      );
    }
  )
);

MenuButton.displayName = 'MenuButton';

export default MenuButton;
