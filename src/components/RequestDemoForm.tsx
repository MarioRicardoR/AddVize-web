import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSteps = [
  {
    title: "Information de base",
    fields: ["businessName", "businessType"]
  },
  {
    title: "Contact",
    fields: ["contactName", "email", "phone"]
  },
  {
    title: "Projet",
    fields: ["currentWebsite", "description"]
  }
];

const requestSchema = z.object({
  businessName: z.string().min(2, "Le nom de l'entreprise est requis"),
  contactName: z.string().min(2, "Le nom du contact est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  businessType: z.string().min(2, "Le type d'entreprise est requis"),
  currentWebsite: z.string().url().optional().or(z.literal("")),
  description: z.string().min(10, "La description est requise")
});

type RequestFormData = z.infer<typeof requestSchema>;

interface RequestDemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestDemoForm({ isOpen, onClose }: RequestDemoFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema)
  });

  const watchedFields = watch();

  const onSubmit = async (data: RequestFormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      reset();
      setCurrentStep(0);
      onClose();
      alert("Demande envoyée avec succès! Nous vous contacterons dans les plus brefs délais.");
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(current => current + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
    }
  };

  const isStepValid = () => {
    const currentFields = formSteps[currentStep].fields;
    return currentFields.every(field => {
      const value = watchedFields[field as keyof RequestFormData];
      return value && (!errors[field as keyof RequestFormData]);
    });
  };

  const labels: Record<keyof RequestFormData, string> = {
    businessName: "Nom de l'entreprise",
    contactName: "Nom du contact",
    email: "Email",
    phone: "Téléphone",
    businessType: "Type d'entreprise",
    currentWebsite: "Site web actuel",
    description: "Quel problème vous a poussé à nous contacter et désirez-vous trouver une solution?"
  };

  const renderField = (fieldName: keyof RequestFormData) => {
    return (
      <div key={fieldName} className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {labels[fieldName]} {fieldName !== 'phone' && fieldName !== 'currentWebsite' && '*'}
        </label>
        {fieldName === 'description' ? (
          <textarea
            {...register(fieldName)}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          />
        ) : (
          <input
            {...register(fieldName)}
            type={fieldName === 'email' ? 'email' : fieldName === 'phone' ? 'tel' : 'text'}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          />
        )}
        {errors[fieldName] && (
          <p className="mt-1 text-sm text-red-600">{errors[fieldName]?.message}</p>
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm"
              onClick={onClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 rounded-2xl shadow-xl relative top-20 sm:my-8"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-primary-500 dark:text-white">
                    Demander un Appel
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Étape {currentStep + 1} sur {formSteps.length}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-6 pt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-primary-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                      {formSteps[currentStep].title}
                    </h4>
                    
                    {formSteps[currentStep].fields.map(field => 
                      renderField(field as keyof RequestFormData)
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-2 flex items-center space-x-2 ${
                      currentStep === 0
                        ? 'opacity-0 cursor-default'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </button>

                  {currentStep < formSteps.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <span>Suivant</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !isStepValid()}
                      className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi..." : "Envoyer"}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}