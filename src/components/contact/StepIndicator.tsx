import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    "Comment pouvons-nous vous aider ?",
    "Votre projet",
    "Vos coordonnées"
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 relative">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? 'bg-secondary-400' : 'bg-gray-300'
              }`}>
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-2 bg-gray-300">
                  {index < currentStep && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className="h-full bg-secondary-400"
                    />
                  )}
                </div>
              )}
            </div>
            <span className="absolute -bottom-6 left-0 text-sm text-gray-600 whitespace-nowrap">
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end mt-8 text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-1" />
        <span>Temps estimé: 2 min</span>
      </div>
    </div>
  );
}