import React from 'react';
import { clsx } from 'clsx';
import { ButtonProps } from './Button.types';

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  buttonStyle,
  buttonType = 'filled',
  label,
  icon,
  loading,
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        'gap-1 font-medium flex justify-center items-center bg-primary-40 rounded-3xl py-2 px-5 shadow-lg hover:opacity-80 text-white ',
        buttonType === 'outlined' && 'border bg-white border-gray-400 text-primary-40 shadow-none',
        buttonType === 'text' && 'bg-transparent hover:bg-primary-90 text-primary-40 shadow-none',
        buttonType === 'elevated' && 'bg-primary-90 text-primary-40 drop-shadow-md',
        buttonType === 'tonal' && 'bg-primary-90 hover:bg-primary-70 text-black shadow-none',
        size === 'small' && 'py-1 px-3',
        size === 'large' && 'py-3 px-6',
        'disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed'
      )}
      style={buttonStyle}
      {...props}>
      <div className={clsx(loading && 'animate-spin')}>{icon}</div>
      {label}
    </button>
  );
};

export default Button;
