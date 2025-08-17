import { notFound } from 'next/navigation';
import Pagination from '../../components/Pagination';
import Results from '../../components/Results';
import Search from '../../components/Search';
import { apiService } from '../../services/api.service';
import { ApiResponse } from '../../types/result.types';
export default async function HomePage() {
  let data: ApiResponse | null = null;
  let error: string | null = null;
  try {
    data = await apiService.getData<ApiResponse>('/planets', {
      page: '1',
      search: '',
    });

    if (!data) {
      notFound();
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error';
  }
  if (error) {
    return (
      <div className="p-2">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <Search />
      <Results initialData={data} />
      <Pagination totalCount={data?.count as number} current={1} />
    </div>
  );
}
