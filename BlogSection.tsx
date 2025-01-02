import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../../ui/GradientText';
import GlowingButton from '../../ui/GlowingButton';
import { blogPosts } from '../../../data/blog';

const BlogSection = () => {
  const navigate = useNavigate();
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Latest <GradientText>Insights</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends and strategies in AI-powered lead generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background-secondary rounded-lg overflow-hidden border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-400">
                  {post.author} • {post.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <GlowingButton onClick={() => navigate('/blog')}>
            View All Posts
          </GlowingButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;