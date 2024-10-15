import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@app/lib';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className={cn('flex size-5', className)}>
        <input ref={ref} className={`peer hidden`} type="checkbox" {...props} />
        <span className="peer-checked:bg-check border-gray-[#d9d9d9] hover:border-primary peer-checked:border-primary peer-checked:bg-primary size-full rounded-sm border-2 bg-center bg-no-repeat" />
      </label>
    );
  }
);

export default Checkbox;
