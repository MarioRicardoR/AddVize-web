import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '../../types';
import StepIndicator from './StepIndicator';
import Step1Initial from './Step1Initial';
import Step2Context from './Step2Context';
import Step3Contact from './Step3Contact';

const contactSchema = z.object({
  projectType: z.enum(['website', 'seo', 'ai', 'other']),
  otherDescription: z.string().optional(),
  businessName: z.string().min(2, 'Le nom de votre entreprise est requis'),
  website: z.string().url().optional().or(z.literal('')),
  name: z.string().min(2, 'Votre nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  preferredContact: z.enum(['email', 'phone', 'whatsapp'])
});

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'email'
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Form submitted:', data);
      // Here you would typically send the data to your backend
      alert('Message envoyé avec succès! Nous vous recontacterons dans les plus brefs délais.');
      methods.reset();
      setCurrentStep(0);
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
        <div className="mb-12">
          <StepIndicator currentStep={currentStep} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && <Step1Initial onNext={nextStep} />}
            {currentStep === 1 && <Step2Context onNext={nextStep} onPrev={prevStep} />}
            {currentStep === 2 && <Step3Contact onPrev={prevStep} />}
          </motion.div>
        </AnimatePresence>
      </form>
    </FormProvider>
  );
}