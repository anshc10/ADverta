import React from 'react';
import { Company } from '../../types/company';
import LogoSlide from './LogoSlide';

interface LogoTrackProps {
  companies: Company[];
  reverse?: boolean;
}

const LogoTrack: React.FC<LogoTrackProps> = ({ companies, reverse = false }) => {
  const duplicatedCompanies = [...companies, ...companies];
  
  return (
    <div className={`flex ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
      {duplicatedCompanies.map((company, index) => (
        <LogoSlide 
          key={`${company.name}-${index}-${reverse ? 'reverse' : 'forward'}`}
          company={company}
          index={index}
        />
      ))}
    </div>
  );
};

export default LogoTrack;