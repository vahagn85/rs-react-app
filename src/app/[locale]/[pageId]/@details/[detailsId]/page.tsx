import DetailButton from '../../../../../components/DetailButton';
import DetailCard from '../../../../../components/DetailCard';
import { apiService } from '../../../../../services/api.service';
import { ApiResponse, Result } from '../../../../../types/result.types';
import { extractIdFromUrl } from '../../../../../utils/extractId';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  const firstPage = await apiService.getData<ApiResponse>('/planets', {
    page: '1',
    search: '',
  });

  const totalPages = Math.ceil(firstPage.count / 10);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) =>
    String(i + 1)
  );

  const allPages = await Promise.all(
    pageNumbers.map((page) =>
      apiService.getData<ApiResponse>('/planets', { page, search: '' })
    )
  );

  const allResults = allPages.flatMap((pageData, pageIndex) =>
    pageData.results.map((item) => ({
      page: String(pageIndex + 1),
      detailsId: String(extractIdFromUrl(item.url ?? '')),
    }))
  );
  return allResults;
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ pageId: string; detailsId: string }>;
}) {
  const { detailsId } = await params;
  const t = await getTranslations('UI');
  let data: Result | null = null;
  let error: Error | string | null = null;

  try {
    data = await apiService.getData<Result>(`/planets/${detailsId}`);
    if (!data) {
      notFound();
    }
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error';
  }

  if (error) {
    return (
      <div className="relative bg-white flex-1 p-2">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <div className="relative bg-white flex-1 p-2">
      <DetailButton />
      <div className="w-full max-w-xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">{t('details')}</h2>
        <DetailCard data={data as Result} />
      </div>
    </div>
  );
}
