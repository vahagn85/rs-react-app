import Card from './Card';
import type { Result } from '../types/result.types';
import { extractIdFromUrl } from '../utils/extractId';
import { useTranslations } from 'next-intl';
interface CardListProps {
  results: Result[];
}

const CardList = (props: CardListProps) => {
  const { results } = props;
  const t = useTranslations('List');
  const page = '1';
  return (
    <ul className="w-full">
      <Card head name={t('name')} desc={t('description')} />
      {results.map((result) => (
        <Card
          key={result.name}
          name={result.name}
          desc={result.climate}
          page={page}
          detailsId={extractIdFromUrl(result.url ?? '') as number}
          result={result}
        />
      ))}
    </ul>
  );
};

export default CardList;
