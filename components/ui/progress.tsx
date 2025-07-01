// components/ui/progress.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    const percentage = Math.min(100, (value / max) * 100);
    return (
      <div
        ref={ref}
        className={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
          className
        )}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
