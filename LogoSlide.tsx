import React from 'react';
import { Company } from '../../types/company';

interface LogoSlideProps {
  company: Company;
  index: number;
}

const LogoSlide: React.FC<LogoSlideProps> = ({ company, index }) => {
  return (
    <div
      key={`${company.name}-${index}`}
      className="flex-none w-[200px] mx-6"
    >
      <div className="h-20 bg-white/5 rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition-colors group">
        <img
          src={company.logo}
          alt={company.name}
          className="max-h-full w-auto object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LogoSlide;