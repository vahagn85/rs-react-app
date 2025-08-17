'use client';
import CardList from './CardList';
import Loading from './Loading';
import { useQueryPlanets } from '../hooks/useQueryPlanets';
import { ApiResponse } from '../types/result.types';
import { useSearchStore } from '../store/searchStore';

interface ResultsProps {
  initialData: ApiResponse | null;
  pageId?: string;
}

const Results = (props: ResultsProps) => {
  const search = useSearchStore((state) => state.search);
  const { isPending, isError, data, error, isFetched } = useQueryPlanets(
    search,
    props.pageId || '1',
    props.initialData as ApiResponse
  );

  const renderContent = () => {
    if (isPending || !isFetched) return <Loading />;
    if (isError) return <p className="text-red-500">{error.message}</p>;
    if (!data) {
      return <p className="text-gray-500">No results found</p>;
    }
    return <CardList results={data?.results || []} />;
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-40 mt-4 bg-white dark:bg-gray-400 rounded-lg shadow-md">
      {renderContent()}
    </div>
  );
};

export default Results;
