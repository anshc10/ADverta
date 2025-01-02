import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
      />
    </div>
  );
};