import { useTranslations } from 'next-intl';
import Button from '../components/Button';

export default function NotFound() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-68px)] bg-gray-100 text-gray-800 px-4 text-center">
      <h1 className="text-8xl font-bold mb-4 text-indigo-600 text-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-2">{t('title')}</h2>
      <p className="text-lg mb-6 max-w-md">{t('description')}</p>
      <Button
        className="text-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-blue-500 hover:bg-blue-600 cursor-pointer focus:outline-none"
        name={t('home')}
      />
    </div>
  );
}
