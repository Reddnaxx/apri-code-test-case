import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

export const Input = observer(
  forwardRef<HTMLInputElement, InputProps>(
    ({ className, placeholder, required, icon, ...props }, ref) => {
      return (
        <div
          className={cn(
            'hover:border-primary relative size-fit rounded-md border border-gray-300 p-2 transition-colors dark:bg-white dark:text-dark flex items-center gap-1',
            className
          )}
        >
          <input
            ref={ref}
            placeholder={placeholder}
            required={required}
            className={
              'peer w-full bg-transparent text-base outline-none transition-transform placeholder:opacity-0 focus:translate-y-2 [&:not(:placeholder-shown)]:translate-y-2'
            }
            {...props}
          />
          <span className="pointer-events-none absolute left-2 top-1/2 block -translate-y-1/2 select-none text-gray-500 transition-[top,font-size] peer-focus:top-2 peer-focus:text-sm peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-sm">
            {placeholder}
            {required && <span className="text-red-500">*</span>}
          </span>
          {icon}
        </div>
      );
    }
  )
);

Input.displayName = 'Input';

export default Input;
