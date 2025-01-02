import React from 'react';

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
      />
    </div>
  );
};