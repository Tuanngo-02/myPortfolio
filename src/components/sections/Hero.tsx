import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const personalInfo = t('personalInfo');
  const contact = t('contact');

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4"
            >
              Hi, my name is
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-slate-500 dark:text-slate-400 mb-8 tracking-tight"
            >
              {personalInfo.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-blue-500/30"
              >
                {t('ui.viewProjects')}
              </a>
              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-full font-medium transition-colors shadow-sm"
              >
                {t('ui.downloadResume')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl translate-x-4 translate-y-4 opacity-20 dark:opacity-40"></div>
              {personalInfo.imageUrl && (
                <img
                  src={personalInfo.imageUrl}
                  alt={personalInfo.name}
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
                />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-slate-400 dark:text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
