import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = observer(
  ({ children, className, ...props }: ButtonProps) => {
    return (
      <button
        className={cn(
          'bg-primary hover:bg-primary/90 active:bg-primary/80 rounded-md px-4 py-2 text-white disabled:bg-gray-300 disabled:text-gray-500 transition-colors',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
