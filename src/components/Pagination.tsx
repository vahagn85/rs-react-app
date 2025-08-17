'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface PaginationProps {
  totalCount: number;
  current: number;
  itemsPerPage?: number;
}

function Pagination({
  totalCount,
  current,
  itemsPerPage = 10,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(current);
  const router = useRouter();
  const t = useTranslations('UI');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.replace(`/${page}`);
  };
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border border-blue-500 dark:border-white dark:bg-white rounded disabled:opacity-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {t('prev')}
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border border-blue-500 dark:border-white  rounded cursor-pointer ${
            currentPage === page
              ? 'bg-blue-500 dark:bg-gray-900 text-white'
              : 'bg-white'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border border-blue-500 dark:border-white dark:bg-white rounded disabled:opacity-50 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}  `}
      >
        {t('next')}
      </button>
    </div>
  );
}

export default Pagination;
