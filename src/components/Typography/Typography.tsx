import clsx from 'clsx';
import React from 'react';
import {
  defaultVariantMapping,
  TypographClasses,
  TypographyProps
} from './Typography.types';

const Typography: React.FC<TypographyProps> = ({
  as,
  variant,
  children,
  className,
  ...props
}) => {
  const getVariantMapping = defaultVariantMapping.get(variant.split('-')[0]);
  return (
    <>
      {React.createElement(
        as || getVariantMapping || 'div',
        {
          className: clsx(
            TypographClasses.get(variant),
            'dark:text-white',
            className || ''
          ),
          ...props
        },
        [children]
      )}
    </>
  );
};

export default Typography;
