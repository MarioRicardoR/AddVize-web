import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, link, features, index }: ServiceCardProps) {
  return (
    <Link to={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
      >
        <Icon className="w-12 h-12 text-secondary-400 mb-4" />
        <h3 className="text-xl font-bold text-primary-500 dark:text-white mb-3 group-hover:text-secondary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-secondary-400/10 text-secondary-400 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}