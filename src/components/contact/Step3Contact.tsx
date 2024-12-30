import React from 'react';
import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../../types';

interface Step3Props {
  onPrev: () => void;
}

const contactMethods = [
  {
    value: 'email',
    label: 'Email',
    icon: Mail
  },
  {
    value: 'phone',
    label: 'Téléphone',
    icon: Phone
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageSquare
  }
];

export default function Step3Contact({ onPrev }: Step3Props) {
  const { register, formState: { errors, isSubmitting }, watch } = useFormContext<ContactFormData>();
  const preferredContact = watch('preferredContact');

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Votre nom
          </label>
          <input
            {...register('name')}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-secondary-400"
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-secondary-400"
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone (optionnel)
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-secondary-400"
            placeholder="+33 6 12 34 56 78"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Comment préférez-vous être contacté ?
          </label>
          <div className="grid grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <motion.label
                key={method.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  preferredContact === method.value
                    ? 'border-secondary-400 bg-secondary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  {...register('preferredContact')}
                  value={method.value}
                  className="sr-only"
                />
                <method.icon className="w-6 h-6 text-secondary-400 mb-2" />
                <span className="block text-sm font-medium">{method.label}</span>
              </motion.label>
            ))}
          </div>
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
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center px-6 py-3 bg-secondary-400 text-white rounded-lg hover:bg-secondary-500 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
    </div>
  );
}