import { useState } from 'react';

interface PaginationProps {
  totalCount: number;
  current: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalCount,
  current,
  itemsPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(current);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border border-blue-500 rounded disabled:opacity-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border border-blue-500 rounded cursor-pointer ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border border-blue-500 rounded disabled:opacity-50 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}  `}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
