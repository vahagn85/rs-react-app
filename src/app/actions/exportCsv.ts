'use server';

import { generateCSV } from '../../utils/filesUtiles';

export async function exportCsv<T extends object>(
  items: T[],
  fileName: string
) {
  const csv = generateCSV(items);

  return {
    csv,
    fileName,
  };
}
