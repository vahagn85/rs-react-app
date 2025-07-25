import Card from './Card';
import type { Result } from '../types/result.types';

interface CardListProps {
  results: Result[];
}

const CardList = (props: CardListProps) => {
  const { results } = props;

  return (
    <ul className="w-full">
      <Card head name="Name-(Planet)" desc="Description-(Climate)" />
      {results.map((result) => (
        <Card key={result.name} name={result.name} desc={result.climate} />
      ))}
    </ul>
  );
};

export default CardList;
