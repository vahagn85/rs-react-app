export const generateCSV = <T extends object>(items: T[]): string => {
  if (items.length === 0) return '';

  const headers = Object.keys(items[0]);
  const rows = items.map((item) =>
    headers
      .map((header) =>
        JSON.stringify((item as Record<string, unknown>)[header] ?? '')
      )
      .join(';')
  );
  return [headers.join(';'), ...rows].join('\n');
};
