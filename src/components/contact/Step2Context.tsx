import React from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ContactFormData } from '../../types';

interface Step2Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2Context({ onNext, onPrev }: Step2Props) {
  const { register, formState: { errors } } = useFormContext<ContactFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de votre entreprise
          </label>
          <input
            {...register('businessName')}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-secondary-400"
            placeholder="Votre entreprise"
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site web actuel (optionnel)
          </label>
          <input
            {...register('website')}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-secondary-400"
            placeholder="https://"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex items-center justify-center px-6 py-3 bg-secondary-400 text-white rounded-lg hover:bg-secondary-500 transition-colors"
        >
          Continuer
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}