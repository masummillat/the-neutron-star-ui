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
  console.log(getVariantMapping);
  return (
    <>
      {React.createElement(
        as || getVariantMapping || 'div',
        {
          className: clsx(className, TypographClasses.get(variant) || ''),
          ...props
        },
        [children]
      )}
    </>
  );
};

export default Typography;
