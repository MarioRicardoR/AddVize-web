import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  Users, 
  ArrowRight, 
  Lightbulb,
  Rocket,
  Bot,
  MessageSquare,
  PenTool,
  Image as ImageIcon,
  BarChart,
  Mail,
  CheckCircle,
  Zap
} from 'lucide-react';
import RequestDemoForm from '../components/RequestDemoForm';
import HeroScene from '../components/HeroScene';

const metrics = [
  { value: "+40%", label: "Augmentation moyenne de la productivité" },
  { value: "2-4x", label: "Retour sur investissement" },
  { value: "-30%", label: "Réduction des tâches répétitives" }
];

const trainingAreas = [
  {
    icon: MessageSquare,
    title: "Communication IA",
    description: "Maîtrisez ChatGPT, Claude et d'autres assistants IA de pointe",
    applications: [
      "✓ Rédaction d'emails professionnels et personnalisés",
      "✓ Support client avancé et gestion des requêtes",
      "✓ Création de documentation technique et guides",
      "✓ Synthèse de réunions et rapports",
      "✓ Communication multilingue"
    ]
  },
  {
    icon: PenTool,
    title: "Création de Contenu",
    description: "Optimisez votre production de contenu avec l'IA",
    applications: [
      "✓ Articles de blog et publications",
      "✓ Descriptions de produits optimisées SEO",
      "✓ Posts réseaux sociaux engageants",
      "✓ Scripts vidéo et podcasts",
      "✓ Newsletters et communications marketing"
    ]
  },
  {
    icon: ImageIcon,
    title: "Production Visuelle",
    description: "Exploitez les outils IA pour le design et l'image",
    applications: [
      "✓ Création d'images pour le marketing",
      "✓ Design de présentations impactantes",
      "✓ Retouche et optimisation photos",
      "✓ Bannières et visuels web",
      "✓ Identité visuelle cohérente"
    ]
  },
  {
    icon: BarChart,
    title: "Analyse de Données",
    description: "Transformez vos données en insights actionnables",
    applications: [
      "✓ Prévisions de ventes et tendances",
      "✓ Segmentation client avancée",
      "✓ Analyse de sentiment client",
      "✓ Reporting automatisé",
      "✓ Optimisation des performances"
    ]
  }
];

const solutions = [
  {
    title: "Chatbots IA",
    description: "Automatisation du support client et qualification des leads 24/7",
    results: ["Réduction de 60% des tickets support", "Qualification continue des prospects", "Satisfaction client améliorée"]
  },
  {
    title: "Marketing Automatisé",
    description: "Campagnes personnalisées et création de contenu optimisé",
    results: ["Contenu généré 5x plus rapidement", "Personnalisation accrue", "ROI marketing amélioré"]
  },
  {
    title: "Automatisation Administrative",
    description: "Simplification des tâches répétitives et gestion documentaire",
    results: ["Gain de 15h/semaine/employé", "Réduction des erreurs", "Traitement plus rapide"]
  }
];

export default function AIConsulting() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeArea, setActiveArea] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section remains the same */}
      <section className="relative min-h-screen bg-primary-900 dark:bg-gray-900 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0">
          <HeroScene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-primary-900/90" />

        <div className="relative container mx-auto px-6 py-12">
          {/* Hero content remains the same */}
          {/* ... */}
        </div>
      </section>

      {/* Training Areas Section - Updated Visual Design */}
      <section id="training" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
              Formations IA Personnalisées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des formations pratiques et interactives pour maîtriser les outils IA les plus performants
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {trainingAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  activeArea === index 
                    ? 'border-secondary-400 transform scale-105' 
                    : 'border-transparent'
                }`}
                onMouseEnter={() => setActiveArea(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-400/10 p-3 rounded-lg">
                    <area.icon className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-500 dark:text-white mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {area.description}
                    </p>
                    <div className="space-y-2">
                      {area.applications.map((app, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-gray-600 dark:text-gray-300"
                        >
                          {app}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-secondary-400 text-white rounded-full hover:bg-secondary-500 transition-colors"
            >
              Démarrer votre formation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section remains the same */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        {/* ... */}
      </section>

      {/* Form Modal */}
      <RequestDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}