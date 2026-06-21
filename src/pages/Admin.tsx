import { useState, useEffect } from 'react';
import type { BlogPost } from '../components/sections/Blog';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Admin = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  useEffect(() => {
    // Load blogs from local storage on mount
    const savedBlogs = localStorage.getItem('portfolio_blogs');
    if (savedBlogs) {
      try {
        setBlogs(JSON.parse(savedBlogs));
      } catch (e) {
        console.error("Failed to parse blogs", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newBlog: BlogPost = {
      id: Date.now().toString(),
      title,
      content,
      imageUrl: imageUrl || undefined,
      date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
    };

    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem('portfolio_blogs', JSON.stringify(updatedBlogs));
    
    // Reset form
    setTitle('');
    setContent('');
    setImageUrl('');
    alert('Blog post added successfully!');
  };

  const handleDelete = (id: string) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('portfolio_blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors pb-20">
      <Navbar />
      <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">← Back to Site</Link>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Create New Blog Post</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
              <input 
                type="text" 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Image URL (optional)</label>
              <input 
                type="url" 
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Content</label>
              <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-600">
                <ReactQuill 
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  modules={modules}
                  className="h-64 mb-12 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Publish Post
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Manage Posts</h2>
          {blogs.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400">No blog posts found.</p>
          ) : (
            <div className="space-y-4">
              {blogs.map(blog => (
                <div key={blog.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{blog.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{blog.date}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-500 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
