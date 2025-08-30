import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Countries, ExtraColumns } from '../types/CountriesType';
import CountryRow from './CountryRow';
import ExtraColumnsModal from './ExtraColumnsModal';

interface CountriesTableProps {
  countries: Countries;
  sortField: string;
  sortOrder: string;
  setSortField: (f: string) => void;
  setSortOrder: (o: string) => void;
  extraColumns: ExtraColumns[];
  setExtraColumns: Dispatch<SetStateAction<ExtraColumns[]>>;
}

export default function CountriesTable({
  countries,
  sortField,
  sortOrder,
  setSortField,
  setSortOrder,
  extraColumns,
  setExtraColumns,
}: CountriesTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };
  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow cursor-pointer"
        >
          Change Columns
        </button>
      </div>
      <div className="overflow-x-auto bg-white  shadow-md">
        <table className="min-w-full border-collapse text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-xs">
              <th
                className="px-4 py-3 border cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="px-4 py-3 border">ISO</th>
              <th
                className="px-4 py-3 border cursor-pointer"
                onClick={() => handleSort('population')}
              >
                Population{' '}
                {sortField === 'population' &&
                  (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="px-4 py-3 border">Year</th>
              <th className="px-4 py-3 border">co2</th>
              <th className="px-4 py-3 border">co2 per capita</th>

              {extraColumns.map((col) => (
                <th key={col} className="px-4 py-3 border">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {countries.map((c, i) => (
              <CountryRow
                key={`${c.isoCode}-${c.year}`}
                country={c}
                index={i}
                extraColumns={extraColumns}
              />
            ))}
          </tbody>
        </table>

        {countries.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            <p>Countries not found</p>
            <p>Try to other search</p>
          </div>
        )}
        {isModalOpen && (
          <ExtraColumnsModal
            extraColumns={extraColumns}
            setExtraColumns={setExtraColumns}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}
