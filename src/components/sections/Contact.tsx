import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const contact = t('contact');

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{t('ui.contact')}</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <a href={`mailto:${contact.email}`} className="p-4 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-full transition-all">
            <Mail size={24} />
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-full transition-all">
            <Github size={24} />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-full transition-all">
            <Linkedin size={24} />
          </a>
          <a href={contact.resumeUrl} target="_blank" rel="noreferrer" className="p-4 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-full transition-all">
            <FileText size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
