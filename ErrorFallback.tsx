import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-primary p-4">
      <div className="bg-background-secondary p-6 rounded-lg max-w-lg w-full border border-accent-purple/10">
        <div className="flex items-center gap-3 mb-4 text-red-500">
          <AlertCircle className="w-6 h-6" />
          <h2 className="text-xl font-bold">Something went wrong</h2>
        </div>
        
        <pre className="text-sm text-gray-400 mb-4 p-3 bg-background-primary rounded-lg overflow-auto">
          {error.message}
        </pre>
        
        <Button
          onClick={resetErrorBoundary}
          variant="primary"
          className="w-full"
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorFallback;