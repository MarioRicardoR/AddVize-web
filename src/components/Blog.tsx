import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "L'IA dans le Marketing Digital en 2024",
    excerpt: "Découvrez comment l'IA révolutionne le marketing digital et les tendances à suivre.",
    content: "",
    author: "Marie Laurent",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    slug: "ia-marketing-digital-2024"
  },
  {
    id: 2,
    title: "Guide du Marketing Automation",
    excerpt: "Un guide complet pour automatiser vos processus marketing efficacement.",
    content: "",
    author: "Thomas Dubois",
    date: "2024-02-10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    slug: "guide-marketing-automation"
  },
  {
    id: 3,
    title: "Optimisation SEO avec l'IA",
    excerpt: "Comment utiliser l'IA pour améliorer votre référencement naturel.",
    content: "",
    author: "Sophie Martin",
    date: "2024-02-05",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    slug: "optimisation-seo-ia"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-500 dark:text-white mb-4">
            Notre Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez nos derniers articles sur l'IA, le marketing digital et les tendances du secteur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                  <span className="flex items-center">
                    <User size={16} className="mr-2" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition"
                >
                  Lire la suite
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}