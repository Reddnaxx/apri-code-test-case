import { cn } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { TextareaHTMLAttributes, forwardRef } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {};

export const Textarea = observer(
  forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, placeholder, required, ...props }, ref) => {
      return (
        <div
          className={cn(
            'hover:border-primary relative size-fit rounded-md border border-gray-300 p-2 transition-colors dark:bg-white dark:text-dark flex items-start gap-1',
            className
          )}
        >
          <textarea
            ref={ref}
            placeholder={placeholder}
            required={required}
            className={
              'peer max-h-40 min-h-10 w-full resize-y bg-transparent pt-4 text-base outline-none transition-transform placeholder:opacity-0'
            }
            {...props}
          />
          <span className="pointer-events-none absolute left-2 top-1 block  select-none text-sm text-gray-500">
            {placeholder}
            {required && <span className="text-red-500">*</span>}
          </span>
        </div>
      );
    }
  )
);

Textarea.displayName = 'Textarea';

export default Textarea;
