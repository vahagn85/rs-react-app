import Card from './Card';
import type { Result } from '../types/result.types';
import { useParams } from 'react-router';
import { extractIdFromUrl } from '../utils/extractId';

interface CardListProps {
  results: Result[];
}

const CardList = (props: CardListProps) => {
  const { results } = props;
  const { page } = useParams();
  return (
    <ul className="w-full">
      <Card head name="Name-(Planet)" desc="Description-(Climate)" />
      {results.map((result) => (
        <Card
          key={result.name}
          name={result.name}
          desc={result.climate}
          page={page}
          detailsId={extractIdFromUrl(result.url ?? '') as number}
        />
      ))}
    </ul>
  );
};

export default CardList;
