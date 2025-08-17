'use client';
import { useRef } from 'react';
import { exportCsv } from '../app/actions/exportCsv';
import { useTranslations } from 'next-intl';

interface CSVDownloadButtonProps<T extends object> {
  selectedItems: T[];
  fileName?: string;
}

const CSVDownloadButton = <T extends object>({
  selectedItems,
  fileName,
}: CSVDownloadButtonProps<T>) => {
  const t = useTranslations('UI');
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleDownload = async () => {
    const { csv, fileName: serverFileName } = await exportCsv(
      selectedItems,
      fileName || `${selectedItems.length}_items.csv`
    );

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = downloadLinkRef.current;
    if (link) {
      link.href = url;
      link.download = serverFileName?.endsWith('.csv')
        ? serverFileName
        : `${serverFileName || `${selectedItems.length}_items`}.csv`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={selectedItems.length === 0}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 
           hover:from-blue-600 hover:to-blue-700 text-white font-medium 
           shadow-md transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t('download')}
      </button>
      <a data-testid="download-link" ref={downloadLinkRef} className="hidden" />
    </>
  );
};

export default CSVDownloadButton;
