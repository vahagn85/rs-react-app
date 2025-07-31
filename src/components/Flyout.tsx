import { useAppStore } from '../store/appStore';
import Button from './Button';

function Flyout() {
  const { selected } = useAppStore();
  const selectedCount = selected.length;
  if (selectedCount === 0) return null;

  const handleUnselectAll = () => {
    console.log('Unselect all items');
  };

  const handleDownload = () => {
    console.log('Download selected items');
  };

  return (
    <div className="pt-20">
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-wrap gap-4 justify-center bg-gray-500 shadow-lg p-4">
        <div className="px-3 py-2 flex align-center self-center bg-white rounded-md shadow-md ">
          <p className="text-md font-medium text-gray-700">
            {selectedCount} {selectedCount === 1 ? 'item is' : 'items are'}{' '}
            selected
          </p>
        </div>

        <div className="p-2 flex gap-2">
          <Button
            name="Unselect all"
            variant="danger"
            onClick={handleUnselectAll}
          />
          <Button name="Download" onClick={handleDownload} />
        </div>
      </div>
    </div>
  );
}

export default Flyout;
