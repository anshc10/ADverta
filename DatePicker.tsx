import React from 'react';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateSelect }) => {
  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div>
      <label className="block text-sm font-medium mb-2 flex items-center">
        <Calendar className="w-4 h-4 mr-2" />
        Select Date
      </label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onDateSelect(e.target.value)}
        min={minDate}
        className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
        required
      />
    </div>
  );
};

export default DatePicker;