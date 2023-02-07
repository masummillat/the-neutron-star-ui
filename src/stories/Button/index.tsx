import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What background color to use
   */
  buttonStyle?: React.CSSProperties | undefined;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button style type
   */
  buttonType?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  icon?: React.ReactNode;
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  buttonStyle,
  buttonType,
  label,
  icon,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'gap-1 font-medium flex justify-center items-center bg-primary-40 rounded-3xl py-2 px-5 shadow-lg hover:opacity-80 text-white',
        buttonType === 'outlined' && 'border bg-white border-gray-400 text-primary-40 shadow-none',
        buttonType === 'text' && 'bg-primary-100 hover:bg-primary-90 text-primary-40 shadow-none',
        buttonType === 'elevated' && 'bg-primary-90 text-primary-40 drop-shadow-md',
        buttonType === 'tonal' && 'bg-primary-90 hover:bg-primary-70 text-black shadow-none',
        size === 'small' && 'py-1 px-3',
        size === 'large' && 'py-3 px-6',
        'disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none'
      )}
      style={buttonStyle}
      {...props}>
      <div className={clsx(loading && 'animate-spin')}>{icon}</div>
      {label}
    </button>
  );
};
