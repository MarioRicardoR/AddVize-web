import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Directeur Marketing",
    company: "TechCorp France",
    content: "AddVize a transformé notre approche marketing. Les résultats ont dépassé nos attentes avec une augmentation de 150% du trafic organique.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Marie Lambert",
    role: "CEO",
    company: "Digital Solutions",
    content: "L'expertise d'AddVize en IA nous a permis d'automatiser nos processus et d'améliorer significativement notre ROI marketing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Pierre Martin",
    role: "Responsable Digital",
    company: "E-Commerce Plus",
    content: "Une équipe professionnelle qui a su comprendre nos besoins et proposer des solutions innovantes et efficaces.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nous et de nos services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-between z-10">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary-500" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary-500" />
            </button>
          </div>

          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-2xl mx-auto">
                  <Quote className="w-12 h-12 text-secondary-400 mb-6 mx-auto" />
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center italic">
                    "{testimonials[current].content}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}