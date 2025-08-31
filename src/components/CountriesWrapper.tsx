import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchData } from '../data/fetchData';
import Controls from './Controls';
import InfoBar from './InfoBar';
import CountriesTable from './CountriesTable';
import type { Countries } from '../types/countriesType';

function CountriesWrapper() {
  const data = fetchData();
  const [searchValue, setSearchValue] = useState('');
  const [selectedYear, setSelectedYear] = useState(2023);
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [previousYear, setPreviousYear] = useState(2023);
  const [isHighlight, setIsHighlight] = useState(false);

  const availableYears = useMemo(() => {
    const years = new Set<number>();
    Object.values(data).forEach((countryData) => {
      countryData.data.forEach((item) => {
        years.add((item as { year: number }).year);
      });
    });
    return Array.from(years).sort((a, b) => b - a);
  }, [data]);

  const countriesData = useMemo(() => {
    return Object.entries(data)
      .filter(([, countryDa]) => countryDa.iso_code)
      .map(([countryName, countryData]) => {
        const yearData = countryData.data.find(
          (item) => item.year === selectedYear
        );
        return {
          name: countryName,
          isoCode: countryData.iso_code,
          population: yearData?.population || null,
          co2: yearData?.co2 || null,
          co2_per_capita: yearData?.co2_per_capita || null,
          year: selectedYear,
          methane: yearData?.methane || null,
          oil_co2: yearData?.oil_co2 || null,
          temperature_change_from_co2:
            yearData?.temperature_change_from_co2 || null,
          gas_co2: yearData?.gas_co2 || null,
        };
      });
  }, [data, selectedYear]);

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countriesData;
    if (searchValue.trim()) {
      const term = searchValue.toLowerCase().trim();
      filtered = countriesData.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          (c.isoCode && c.isoCode.toLowerCase().includes(term))
      );
    }

    return filtered.sort((a, b) => {
      let aValue: string | number, bValue: string | number;
      if (sortField === 'name') {
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
      } else if (sortField === 'population') {
        aValue = typeof a.population === 'number' ? a.population : 0;
        bValue = typeof b.population === 'number' ? b.population : 0;
      } else {
        aValue = 0;
        bValue = 0;
      }
      return sortOrder === 'asc'
        ? aValue > bValue
          ? 1
          : aValue < bValue
            ? -1
            : 0
        : aValue < bValue
          ? 1
          : aValue > bValue
            ? -1
            : 0;
    });
  }, [countriesData, searchValue, sortField, sortOrder]);

  const handleYearChange = useCallback(
    (newYear: number) => {
      setPreviousYear(selectedYear);
      setSelectedYear(newYear);
    },
    [selectedYear]
  );

  useEffect(() => {
    if (previousYear !== selectedYear) {
      setIsHighlight(true);
      const timer = setTimeout(() => setIsHighlight(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedYear, previousYear]);
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        CO₂ emissions data by countries
      </h1>

      <Controls
        years={availableYears}
        selectedYear={selectedYear}
        setSelectedYear={handleYearChange}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <InfoBar
        total={countriesData.length}
        found={filteredAndSortedCountries.length}
        year={selectedYear}
        sortField={sortField}
        sortOrder={sortOrder}
      />

      <CountriesTable
        countries={filteredAndSortedCountries as unknown as Countries}
        sortField={sortField}
        sortOrder={sortOrder}
        setSortField={setSortField}
        setSortOrder={setSortOrder}
        isHighlight={isHighlight}
      />
    </div>
  );
}

export default CountriesWrapper;
