import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ selectedTime, onTimeSelect }) => {
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div>
      <label className="block text-sm font-medium mb-2 flex items-center">
        <Clock className="w-4 h-4 mr-2" />
        Select Time
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => onTimeSelect(time)}
            className={`p-3 rounded-lg border transition-all ${
              selectedTime === time
                ? 'border-accent-purple bg-accent-purple/10'
                : 'border-gray-700 hover:border-accent-purple/50'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;