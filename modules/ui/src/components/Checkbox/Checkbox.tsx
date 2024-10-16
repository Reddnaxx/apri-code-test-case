import { CheckSvg } from '@app/ui';
import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { forwardRef, InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = observer(
  forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, ...props }, ref) => {
      return (
        <label className={cn('flex size-5', className)}>
          <input
            ref={ref}
            className={`peer hidden`}
            type="checkbox"
            {...props}
          />
          <span className="border-gray-[#d9d9d9] hover:border-primary peer-checked:border-primary peer-checked:bg-primary flex size-full items-center justify-center rounded-sm border-2 transition-colors">
            <CheckSvg className="not:peer-checked:hidden" />
          </span>
        </label>
      );
    }
  )
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
