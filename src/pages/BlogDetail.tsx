import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { BlogPost } from '../components/sections/Blog';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/layout/Navbar';
import Contact from '../components/sections/Contact';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Find blog in static data
    const staticBlogs = t('blogs') || [];
    let foundBlog = staticBlogs.find((b: any) => b.id === id);

    // If not found, look in localStorage
    if (!foundBlog) {
      const localBlogsRaw = localStorage.getItem('portfolio_blogs');
      if (localBlogsRaw) {
        try {
          const localBlogs = JSON.parse(localBlogsRaw);
          foundBlog = localBlogs.find((b: any) => b.id === id);
        } catch (e) {
          console.error(e);
        }
      }
    }

    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id, t]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block font-medium">
            ← Back to Home
          </Link>
          
          {blog ? (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">{blog.date}</p>
              
              {blog.imageUrl && (
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-auto md:h-96 object-cover rounded-2xl shadow-md mb-10"
                />
              )}
              
              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Blog post not found</h2>
              <p className="text-slate-600 dark:text-slate-400">The article you are looking for does not exist or has been removed.</p>
            </div>
          )}
        </article>
      </main>
      <Contact />
    </div>
  );
};

export default BlogDetail;
