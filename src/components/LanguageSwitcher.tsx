'use client';

import { usePathname, useRouter } from '../i18n/navigation';
import { routing } from '../i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchTo = (locale: string) => {
    router.replace({ pathname }, { locale });
  };
  return (
    <div className="flex gap-2">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchTo(locale)}
          disabled={locale === currentLocale}
          className={`flex items-center justify-center w-8 h-8 rounded-md border cursor-pointer text-sm ${
            locale === currentLocale
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-black'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
