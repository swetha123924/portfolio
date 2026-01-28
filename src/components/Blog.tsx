import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import BackgroundLines from './BackgroundLines';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for creating maintainable and performant React applications with modern tools and techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      slug: "building-scalable-react-apps"
    },
    {
      title: "Mastering TypeScript: Advanced Patterns",
      excerpt: "Deep dive into advanced TypeScript patterns that will level up your type safety and developer experience.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "TypeScript",
      slug: "mastering-typescript-patterns"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the future of web development in 2024 and beyond.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Web Development",
      slug: "future-of-web-development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#0f0b1f' }}>
      {/* Animated Background Lines */}
      <BackgroundLines />

      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-white" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Latest Articles
            </h2>
          </div>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Category */}
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white mb-4">
                {article.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.a
            href="https://blog.example.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;