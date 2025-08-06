import { useState } from 'react';
import Results from './Results';
import Search from './Search';
import Pagination from './Pagination';
import { useNavigate, useParams } from 'react-router';
import { useSearchFromLS } from '../hooks/useSearchFromLS';
import { useDataPlanets } from '../hooks/useDataPlanets';
function App() {
  const { page, detailsId } = useParams();
  const navigate = useNavigate();

  const { value: searchLS, updateSearch } = useSearchFromLS('search-swapi', '');
  const [search, setSearch] = useState(searchLS);
  const [searchApi, setSearchApi] = useState(searchLS);

  const { isPending, isError, data, error } = useDataPlanets(searchApi, page);

  const handleSearch = (value: string) => setSearch(value);

  const handleClick = () => {
    if (search.trim()) {
      updateSearch(search.trim());
    }
    setSearchApi(search);
  };

  const handlePageChange = (newPage: number) => {
    navigate(`/${newPage}${detailsId ? `/${detailsId}` : ''}`);
  };
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <Search search={search} onSearch={handleSearch} onClick={handleClick} />
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
