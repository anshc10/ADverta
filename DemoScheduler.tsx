import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInUp } from '../../styles/animations';
import DatePicker from './DatePicker';
import TimeSlotPicker from './TimeSlotPicker';
import ContactForm from './ContactForm';
import InterestSelector from './InterestSelector';
import SuccessMessage from './SuccessMessage';
import { crmService } from '../../lib/services/crmService';

interface FormData {
  name: string;
  email: string;
  company: string;
  interests: string[];
}

const DemoScheduler = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interests: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = () => {
    switch (step) {
      case 1:
        return !!selectedDate && !!selectedTime;
      case 2:
        return formData.name && formData.email && formData.company;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      setError(null);
    } else {
      setError('Please fill in all required fields');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateStep()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await crmService.scheduleDemo({
        date: selectedDate,
        time: selectedTime,
        ...formData
      });
      
      setSubmitted(true);
    } catch (err) {
      setError('Failed to schedule demo. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessMessage date={selectedDate} time={selectedTime} />;
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-8">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
          {error}
        </div>
      )}

      <motion.div
        variants={fadeInUp}
        className="space-y-8"
      >
        {step === 1 && (
          <>
            <DatePicker 
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />

            <TimeSlotPicker
              selectedTime={selectedTime}
              onTimeSelect={setSelectedTime}
            />

            <Button
              type="button"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleNext}
            >
              Next: Your Information
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <ContactForm
              formData={formData}
              onChange={setFormData}
            />

            <InterestSelector
              selectedInterests={formData.interests}
              onInterestChange={(interests) => setFormData({ ...formData, interests })}
            />

            <div className="flex gap-4">
              <Button
                type="button"
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </form>
  );
};

export default DemoScheduler;