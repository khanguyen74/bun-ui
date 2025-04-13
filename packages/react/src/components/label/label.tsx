import * as LabelPrimitives from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cx } from '../../lib/utils';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);
const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitives.Root
    ref={ref}
    className={cx(labelVariants(), className)}
    {...props}
  />
));

Label.displayName = 'Label';

export default Label;
