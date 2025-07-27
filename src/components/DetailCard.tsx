import type { Result } from '../types/result.types';
import { getPlanetDetails } from '../utils/planetUtils';

interface DetailItemProps {
  data: Result;
}

function DetailCard({ data }: DetailItemProps) {
  const planetDetails = getPlanetDetails(data);
  return (
    <div className="border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden">
      <div className="bg-gray-700 p-4">
        <h2 className="text-xl font-bold text-white">{data.name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {planetDetails.map((detail) => (
          <div key={detail.label} className="space-y-1">
            <p className="text-sm font-medium text-gray-500">{detail.label}</p>
            <p className="font-semibold">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailCard;
