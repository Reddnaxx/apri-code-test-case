import { CheckSvg } from '@app/ui';
import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { forwardRef, InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = observer(
  forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, ...props }, ref) => {
      return (
        <label
          className={cn('flex size-5 relative group cursor-pointer', className)}
        >
          <input
            ref={ref}
            className={`peer hidden`}
            type="checkbox"
            {...props}
          />
          <span className="border-gray-[#d9d9d9] group-hover:border-primary peer-checked:border-primary peer-checked:bg-primary flex size-full items-center justify-center rounded-sm border-2 transition-colors"></span>
          <CheckSvg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity peer-checked:opacity-100" />
        </label>
      );
    }
  )
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
