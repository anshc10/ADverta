import React from 'react';

interface InterestSelectorProps {
  selectedInterests: string[];
  onInterestChange: (interests: string[]) => void;
}

const InterestSelector: React.FC<InterestSelectorProps> = ({ selectedInterests, onInterestChange }) => {
  const interestAreas = [
    'Lead Generation',
    'Business Automation',
    'Lead Authority Funnel',
    'Analytics & Reporting'
  ];

  const handleInterestToggle = (interest: string) => {
    const newInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter(i => i !== interest)
      : [...selectedInterests, interest];
    onInterestChange(newInterests);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Areas of Interest</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {interestAreas.map((area) => (
          <label
            key={area}
            className="flex items-center space-x-2 p-3 rounded-lg border border-gray-700 hover:border-accent-purple/50 cursor-pointer transition-all"
          >
            <input
              type="checkbox"
              checked={selectedInterests.includes(area)}
              onChange={() => handleInterestToggle(area)}
              className="rounded border-gray-700 text-accent-purple focus:ring-accent-purple"
            />
            <span>{area}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default InterestSelector;