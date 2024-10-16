import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const IconButton = observer(
  forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ children, className, ...props }, ref) => {
      return (
        <button
          ref={ref}
          className={cn(
            'rounded-full transition-colors hover:bg-gray-100 active:bg-blue-50',
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
    }
  )
);

IconButton.displayName = 'IconButton';

export default IconButton;
