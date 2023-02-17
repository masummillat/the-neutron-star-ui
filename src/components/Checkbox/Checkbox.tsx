import clsx from 'clsx';
import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  checked = true,
  helperText
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);
  return (
    <div className="flex">
      <div className="flex items-center h-5">
        <input
          checked={isChecked}
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
          className="w-4 h-4 rounded-md text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 "
        />
      </div>
      <div className="ml-2 text-sm">
        <label
          htmlFor="helper-checkbox"
          className="font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
        <p
          id="helper-checkbox-text"
          className="text-xs font-normal text-gray-500 dark:text-gray-300">
          {helperText}
        </p>
      </div>
    </div>
  );
};

export default Checkbox;
