import { useState, type Dispatch, type SetStateAction } from 'react';
import type { ExtraColumns } from '../types/countriesType';
import { extraFields } from '../data/fields';

interface ExtraColumnsModalProps {
  extraColumns: ExtraColumns[];
  setExtraColumns: Dispatch<SetStateAction<ExtraColumns[]>>;
  onClose: () => void;
}

function ExtraColumnsModal({
  extraColumns,
  setExtraColumns,
  onClose,
}: ExtraColumnsModalProps) {
  const [selectedColumns, setSelectedColumns] = useState(extraColumns);
  const toggleColumn = (field: ExtraColumns) => {
    setSelectedColumns((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };
  const handleApply = () => {
    setExtraColumns(selectedColumns);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-80">
        <h2 className="text-lg font-semibold mb-4">Choose extra columns</h2>
        <div className="space-y-2">
          {extraFields.map((field) => (
            <label key={field} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedColumns.includes(field as ExtraColumns)}
                onChange={() => toggleColumn(field as ExtraColumns)}
              />
              <span>{field}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExtraColumnsModal;
