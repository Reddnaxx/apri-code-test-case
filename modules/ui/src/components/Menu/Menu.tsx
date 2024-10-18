import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { ReactNode, useEffect, useRef } from 'react';

export type MenuProps = {
  className?: string;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  visible: boolean;
  children: ReactNode;
};

export const Menu = observer(
  ({ className, setIsMenuOpen, children, visible }: MenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setIsMenuOpen(false);
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [setIsMenuOpen]);

    if (!visible) return null;

    return (
      <div
        ref={menuRef}
        className={cn(
          'bg-[#50c5ff]/20 backdrop-blur-sm rounded-md flex flex-col gap-1 animate-expand-menu relative dark:bg-zinc-700/20',
          className
        )}
      >
        <div className="absolute -top-2 right-1 size-0 border-x-8 border-b-8 border-x-transparent border-b-[#50c5ff]/20"></div>
        <div className="size-full overflow-hidden rounded-md">{children}</div>
      </div>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;
