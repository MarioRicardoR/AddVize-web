import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Prenez 2 minutes pour nous parler de votre projet et nous vous répondrons dans les 24h
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}