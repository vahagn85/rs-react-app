import { useState } from 'react';
import Results from './Results';
import Search from './Search';
import Pagination from './Pagination';
import { useRouter } from 'next/navigation';
import { useSearchFromLS } from '../hooks/useSearchFromLS';
import { useQueryPlanets } from '../hooks/useQueryPlanets';
import { useQueryRefresh } from '../hooks/useQueryRefresh';
import Button from './Button';

function App() {
  // const { page, detailsId } = useParams();
  const page = '1';
  const detailsId = '1';
  const navigate = useRouter();

  const { value: searchLS, updateSearch } = useSearchFromLS('search-swapi', '');
  const [search, setSearch] = useState(searchLS);
  const [searchApi, setSearchApi] = useState(searchLS);

  const { isPending, isError, data, error } = useQueryPlanets(searchApi, page);
  const refresh = useQueryRefresh('planets', searchApi, page);

  const handleSearch = (value: string) => setSearch(value);

  const handleClick = () => {
    if (search.trim()) {
      updateSearch(search.trim());
    }
    setSearchApi(search);
  };

  const handlePageChange = (newPage: number) => {
    navigate.push(`/${newPage}${detailsId ? `/${detailsId}` : ''}`);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <Search search={search} onSearch={handleSearch} onClick={handleClick} />
      <Button
        name="Refresh Planets - Manual cache invalidation"
        className="mt-4"
        onClick={refresh}
      />
      <Results
        results={data?.results || []}
        loading={isPending}
        error={isError ? error.message : error}
      />
      {data && data.count > 0 && !isPending && (
        <Pagination
          totalCount={data.count}
          current={Number(page) || 1}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
