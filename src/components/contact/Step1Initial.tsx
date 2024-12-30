import React from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Search, Brain, HelpCircle } from 'lucide-react';
import { ContactFormData } from '../../types';

interface Step1Props {
  onNext: () => void;
}

const options = [
  {
    value: 'website',
    label: 'Créer/Améliorer mon site web',
    icon: Globe,
    color: 'text-blue-500'
  },
  {
    value: 'seo',
    label: 'Booster mon référencement Google',
    icon: Search,
    color: 'text-green-500'
  },
  {
    value: 'ai',
    label: "Implémenter l'IA dans mon entreprise",
    icon: Brain,
    color: 'text-purple-500'
  },
  {
    value: 'other',
    label: 'Autre projet',
    icon: HelpCircle,
    color: 'text-gray-500'
  }
];

export default function Step1Initial({ onNext }: Step1Props) {
  const { register, watch, setValue } = useFormContext<ContactFormData>();
  const projectType = watch('projectType');

  const handleOptionClick = (value: 'website' | 'seo' | 'ai' | 'other') => {
    setValue('projectType', value);
    if (value !== 'other') {
      setTimeout(onNext, 300);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <motion.button
            key={option.value}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleOptionClick(option.value as any)}
            className={`p-6 rounded-lg border-2 text-left transition-all ${
              projectType === option.value
                ? 'border-secondary-400 bg-secondary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <option.icon className={`w-8 h-8 ${option.color} mb-4`} />
            <h3 className="text-lg font-semibold mb-2">{option.label}</h3>
          </motion.button>
        ))}
      </div>

      {projectType === 'other' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-4"
        >
          <textarea
            {...register('otherDescription')}
            placeholder="Décrivez votre projet..."
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-secondary-400"
            rows={4}
          />
          <button
            type="button"
            onClick={onNext}
            className="flex items-center justify-center w-full p-4 bg-secondary-400 text-white rounded-lg hover:bg-secondary-500 transition-colors"
          >
            Continuer
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      )}
    </div>
  );
}