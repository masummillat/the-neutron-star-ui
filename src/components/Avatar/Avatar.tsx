import clsx from 'clsx';
import React from 'react';
import { AvatarProps } from './Avatar.types';
const defaultImg =
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  alt,
  src = defaultImg,
  className
}) => {
  const sizes = new Map([
    ['sm', 'h-8 w-8'],
    ['md', 'h-12 w-12'],
    ['lg', 'h-14 w-14']
  ]);
  return (
    <img
      className={clsx(
        'inline-block rounded-full ring-2 ring-white object-cover ',
        sizes.get(size),
        className
      )}
      src={src}
      alt={alt || ''}
    />
  );
};
export default Avatar;
