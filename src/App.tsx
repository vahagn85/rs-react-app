import { Suspense } from 'react';
import CountriesWrapper from './components/CountriesWrapper';
import Loading from './components/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <CountriesWrapper />
    </Suspense>
  );
}

export default App;
