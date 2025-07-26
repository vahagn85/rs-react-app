import { useEffect } from 'react';
import App from '../App';
import { useSearchParams } from 'react-router';
function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: '1' });
    }
  }, [page, setSearchParams]);

  return <App />;
}

export default HomePage;
