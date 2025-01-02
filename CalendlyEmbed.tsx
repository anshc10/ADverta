import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyEmbed = () => {
  return (
    <div className="h-[600px] w-full">
      <InlineWidget
        url="https://calendly.com/your-calendly-url"
        styles={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default CalendlyEmbed;