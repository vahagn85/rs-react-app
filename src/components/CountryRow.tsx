import type { Country, ExtraColumns } from '../types/CountriesType';

interface CountryRowProps {
  country: Country;
  index: number;
  extraColumns: ExtraColumns[];
  isHighlight: boolean;
}

export default function CountryRow({
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
