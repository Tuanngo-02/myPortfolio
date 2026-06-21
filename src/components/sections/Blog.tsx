import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  date: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const staticBlogs = t('blogs') || [];
    const localBlogsRaw = localStorage.getItem('portfolio_blogs');
    let localBlogs: BlogPost[] = [];
    
    if (localBlogsRaw) {
      try {
        localBlogs = JSON.parse(localBlogsRaw);
      } catch (e) {
        console.error("Could not parse local blogs", e);
      }
    }
    
    // Combine static and local blogs, sorting by date descending
    const combinedBlogs = [...localBlogs, ...staticBlogs].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    setBlogs(combinedBlogs);
  }, [t]);

  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{t('ui.latestBlogs')}</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        {blogs.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">{t('ui.noBlogs')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {blog.imageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">{blog.date}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {blog.content.replace(/<[^>]*>?/gm, '')}
                  </p>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="mt-auto text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    {t('ui.readMore')} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
