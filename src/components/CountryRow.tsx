import { memo } from 'react';
import type { Country, ExtraColumns } from '../types/countriesType';

interface CountryRowProps {
  country: Country;
  index: number;
  extraColumns: ExtraColumns[];
  isHighlight: boolean;
}

function CountryRow({
  country,
  index,
  extraColumns,
  isHighlight,
}: CountryRowProps) {
  return (
    <tr
      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${isHighlight ? 'animate-pulse bg-yellow-100' : ''}`}
    >
      <td className="px-4 py-2 border border-gray-400">{country.name}</td>
      <td className="px-4 py-2 border border-gray-400">
        {country.isoCode || 'N/A'}
      </td>
      <td className="px-4 py-2 border border-gray-400">
        {country.population?.toLocaleString('en-US') ?? 'N/A'}
      </td>
      <td className="px-4 py-2 border border-gray-400">
        {country.year || 'N/A'}
      </td>
      <td className="px-4 py-2 border border-gray-400">
        {country.co2 ? country.co2.toFixed(2) : 'N/A'}
      </td>
      <td className="px-4 py-2 border border-gray-400">
        {country.co2_per_capita ? country.co2_per_capita.toFixed(4) : 'N/A'}
      </td>
      {extraColumns.map((col) => (
        <td key={col} className="px-4 py-2 border border-gray-400">
          {country[col]?.toFixed(5) ?? 'N/A'}
        </td>
      ))}
    </tr>
  );
}

export default memo(CountryRow, (prev, next) => {
  return (
    prev.country.isoCode === next.country.isoCode &&
    prev.country.year === next.country.year &&
    prev.country.population === next.country.population &&
    prev.country.co2 === next.country.co2 &&
    prev.country.co2_per_capita === next.country.co2_per_capita &&
    prev.extraColumns.join(',') === next.extraColumns.join(',') &&
    prev.isHighlight === next.isHighlight
  );
});
