import { memo } from 'react';
interface ControlsProps {
  years: number[];
  selectedYear: number;
  setSelectedYear: (y: number) => void;
  searchValue: string;
  setSearchValue: (s: string) => void;
}

function Controls({
  years,
  selectedYear,
  setSelectedYear,
  searchValue,
  setSearchValue,
}: ControlsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
      <div className="w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="mr-2 font-medium">Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default memo(Controls);
