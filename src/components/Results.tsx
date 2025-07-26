import CardList from './CardList';
import type { Result } from '../types/result.types';
import Loading from './Loading';

interface ResultsProps {
  results: Result[];
  loading?: boolean;
  error?: string | null;
}

const Results = (props: ResultsProps) => {
  const renderContent = () => {
    const { loading, results, error } = props;
    if (loading) return <Loading />;
    if (error) return <p className="text-red-500">{error}</p>;
    if (results.length === 0) {
      return <p className="text-gray-500">No results found</p>;
    }
    return <CardList results={results} />;
  };

  return (
    <main className="flex items-center justify-center p-4 min-h-40 mt-4 bg-white rounded-lg shadow-md">
      {renderContent()}
    </main>
  );
};

export default Results;
