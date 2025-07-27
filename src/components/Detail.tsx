import { useNavigate, useParams } from 'react-router';
import Loading from './Loading';
import type { Result } from '../types/result.types';
import DetailCard from './DetailCard';
import useData from '../hooks/useData';
import Button from './Button';

function Detail() {
  const { detailsId, page } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useData<Result>(`/planets/${detailsId}`);

  const renderContent = () => {
    if (loading) return <Loading />;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!data) {
      return <p className="text-gray-500">No found</p>;
    }
    return <DetailCard data={data} />;
  };
  return (
    <div className="relative bg-white flex-1 p-2">
      <div className="flex justify-end">
        <Button
          variant="danger"
          name="X"
          onClick={() => navigate(`/${page}`)}
        />
      </div>
      <div className="w-full max-w-xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        {renderContent()}
      </div>
    </div>
  );
}

export default Detail;
