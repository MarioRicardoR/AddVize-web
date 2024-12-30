import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Comment l'IA peut-elle bénéficier à une PME ou une entreprise régionale ?",
    answer: "L'IA apporte des avantages concrets : automatisation des tâches répétitives permettant aux employés de se concentrer sur des activités à plus forte valeur ajoutée, personnalisation approfondie des interactions clients, et analyse poussée des données pour de meilleures décisions stratégiques. Ces solutions augmentent l'efficacité opérationnelle et la compétitivité.",
    category: "IA"
  },
  {
    id: 2,
    question: "Combien de temps faut-il pour voir des résultats en SEO ?",
    answer: "Pour nos services SEO, les premiers résultats sont généralement visibles après 3-6 mois, selon la concurrence de votre secteur et vos objectifs. Cette période permet à Google d'indexer et d'évaluer les améliorations apportées à votre site.",
    category: "SEO"
  },
  {
    id: 3,
    question: "Proposez-vous des formations personnalisées ?",
    answer: "Oui, nous adaptons nos formations aux besoins spécifiques de votre entreprise. Une session préliminaire est organisée pour comprendre votre organisation, vos processus et vos objectifs, permettant ainsi de créer un programme de formation parfaitement aligné avec vos besoins.",
    category: "Formation"
  },
  {
    id: 4,
    question: "Quels types d'entreprises peuvent bénéficier de vos services ?",
    answer: "Nos services s'adressent aux entreprises ayant des processus établis et des workflows définis. Nous ne sommes pas adaptés aux solopreneurs ou aux entreprises sans systèmes ou processus déterminés. L'efficacité de nos solutions repose sur l'existence d'une structure organisationnelle claire et de processus contrôlés.",
    category: "Général"
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trouvez les réponses à vos questions sur nos services et notre approche.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition text-left"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}