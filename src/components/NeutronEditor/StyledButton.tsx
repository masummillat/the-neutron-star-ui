import clsx from 'clsx';
import React from 'react';

interface StyledButtonProps {
  active: boolean;
  label: string;
  onToggle: (style: string) => void;
  style: string;
}
const StyledButton: React.FC<StyledButtonProps> = ({
  active,
  label,
  onToggle,
  style
}) => {
  const handleToggle = () => {
    onToggle(style);
  };
  return (
    <span
      onMouseDown={handleToggle}
      className={clsx('dark:text-white', active && 'text-purple-700')}>
      {label}
    </span>
  );
};

export default StyledButton;
