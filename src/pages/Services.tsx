import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Sparkles, Bot, Video, Users, GraduationCap, Phone, ArrowRight, Rocket } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import RequestDemoForm from '../components/RequestDemoForm';

const services = [
  {
    icon: Code,
    title: "Votre nouveau Site Web pro sans vous ruiner",
    description: "Un site web sur-mesure, optimisé pour le SEO et la conversion, à 1/4 du prix d'un développeur traditionnel, grâce aux nouveaux outils d'IA et sous la supervision de nos developpeurs pour une qualité irréprochable",
    link: "/services/website-builder",
    features: ["Design responsive", "Performance optimisée", "SEO-friendly"]
  },
  {
    icon: Sparkles,
    title: "Passe en 1ère place sur Google",
    description: "Attirer plus de clients avec nos stratégies de contenu SEO avancées qui vous propulsent en avant des recherches Google, plus rapidement et à un fragment du prix habituel grâce à l'IA",
    link: "/services/seo",
    features: ["Audit complet", "Optimisation technique", "Content marketing"]
  },
  {
    icon: Brain,
    title: "Votre Entreprise gagne en performance grâce aux IA",
    description: "Gagner en temps et productivité grâce à l'IA : nous formons vos équipes, et implémentons les outils IA adaptés à vos process pour vous faire gagner en productivité et résultats !",
    link: "/services/ai-consulting",
    features: ["Formation personnalisée", "Intégration IA", "Automatisation"]
  },
  {
    icon: Rocket,
    title: "Créez votre SaaS en quelques semaines",
    description: "Transformez votre idée en MVP fonctionnel rapidement et à moindre coût grâce à notre expertise en no-code et IA. Testez votre marché sans investissement massif en développement.",
    link: "/services/saas-builder",
    features: ["MVP en 4-8 semaines", "No-code/IA", "Évolutif"]
  },
  {
    icon: GraduationCap,
    title: "Formation Entreprise",
    description: "Formez vos équipes aux dernières technologies IA pour améliorer leur productivité et leur efficacité au quotidien.",
    link: "/services/company-training",
    features: ["Formation sur mesure", "Pratique intensive", "Suivi personnalisé"]
  },
  {
    icon: Video,
    title: "Création Vidéo IA",
    description: "Créez des vidéos professionnelles rapidement et à moindre coût grâce à l'IA, parfaites pour votre marketing et votre communication.",
    link: "/services/ai-video",
    features: ["Création rapide", "Qualité pro", "Personnalisation"]
  },
  {
    icon: Users,
    title: "Gestion IA Réseaux Sociaux",
    description: "Automatisez et optimisez votre présence sur les réseaux sociaux avec l'IA pour plus d'engagement et de conversions.",
    link: "/services/social-media",
    features: ["Planification auto", "Contenu optimisé", "Analytics avancés"]
  }
];

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Des solutions innovantes pour propulser votre entreprise vers le succès
          </p>
          
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-secondary-400 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Demander un Appel
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-secondary-500 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-secondary-400 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-secondary-400/20 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Discuter de votre projet
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-secondary-500 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      <RequestDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}