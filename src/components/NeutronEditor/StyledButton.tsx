import clsx from 'clsx';
import React from 'react';

interface StyledButtonProps {
  active: boolean;
  label: string;
  onToggle: (style: string) => void;
  style: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
const StyledButton: React.FC<StyledButtonProps> = ({
  active,
  label,
  onToggle,
  style,
  icon: Icon
}) => {
  const handleToggle = () => {
    onToggle(style);
  };
  return (
    <span
      onMouseDown={handleToggle}
      className={clsx(
        'dark:text-white inline-block cursor-pointer',
        active && 'text-purple-700'
      )}>
      {Icon ? (
        <Icon
          className={clsx(
            active && 'text-purple-700',
            'align-baseline inline-block'
          )}
          fill={active ? 'rgb(126 34 206/1)' : 'rgb(107 114 128/1)'}
          width={16}
          height={16}
        />
      ) : (
        label
      )}
    </span>
  );
};

export default StyledButton;
