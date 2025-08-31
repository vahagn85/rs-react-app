interface InfoBarProps {
  total: number;
  found: number;
  year: number;
  sortField: string;
  sortOrder: string;
}

const fieldLabels: Record<string, string> = {
  name: 'name',
  population: 'population',
};

function InfoBar({ total, found, year, sortField, sortOrder }: InfoBarProps) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4 text-sm text-gray-600">
      <span>
        Founded: <b>{found}</b> / {total} countries
      </span>

      <span>
        Sort by: {fieldLabels[sortField]} (
        {sortOrder === 'asc' ? 'ASC' : 'DESC'})
      </span>
      <span>
        Year: <b>{year}</b>
      </span>
    </div>
  );
}
export default InfoBar;
