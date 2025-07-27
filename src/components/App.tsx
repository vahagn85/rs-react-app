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
  const { loading, error, results, count, fetchData } = useDataPlanets(
    search,
    page
  );

  const handleSearch = (value: string) => setSearch(value);

  const handleClick = () => {
    if (search.trim()) {
      updateSearch(search.trim());
    }
    fetchData(search, page);
  };

  const handlePageChange = (newPage: number) => {
    navigate(`/${newPage}${detailsId ? `/${detailsId}` : ''}`);
    fetchData(search, newPage.toString());
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <Search search={search} onSearch={handleSearch} onClick={handleClick} />
      <Results results={results} loading={loading} error={error} />
      {count > 0 && !loading && (
        <Pagination
          totalCount={count}
          current={Number(page) || 1}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
