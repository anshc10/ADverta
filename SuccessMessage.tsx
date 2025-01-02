import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { fadeInUp } from '../../styles/animations';

interface SuccessMessageProps {
  date: string;
  time: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ date, time }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="text-center p-8"
    >
      <div className="flex justify-center mb-4">
        <CheckCircle className="w-16 h-16 text-accent-purple" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Demo Successfully Scheduled!</h2>
      <p className="text-gray-400 mb-4">
        Thank you for scheduling a demo. You'll receive a confirmation email shortly with meeting details.
      </p>
      <div className="bg-background-primary/50 p-4 rounded-lg inline-block">
        <p className="text-accent-purple font-medium">
          {date} at {time}
        </p>
      </div>
    </motion.div>
  );
};

export default SuccessMessage;