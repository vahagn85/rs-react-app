import { useTranslations } from 'next-intl';
function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
        {t('title')}
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          {t('author')}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <p className="mb-4">{t('description')}</p>
          <p className="mb-4">
            {t('github')} - {''}
            <a
              href="https://github.com/vahagn85"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              vahagn85
            </a>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          {t('courseTitle')}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <p className="mb-4">{t('courseDescription')}</p>
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            {t('courseLink')}
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
