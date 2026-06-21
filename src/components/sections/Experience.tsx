import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experience: any[] = t('experience') || [];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{t('ui.experienceTitle')}</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-600"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full inline-block">
                  {exp.duration}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
