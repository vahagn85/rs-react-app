// import { useNavigate, useParams } from 'react-router';
import Loading from './Loading';
import DetailCard from './DetailCard';
import Button from './Button';
import { useQueryPlanet } from '../hooks/useQueryPlanet';
import { useQueryRefresh } from '../hooks/useQueryRefresh';
import { useRouter } from 'next/navigation';

function Detail() {
  // const { detailsId, page } = useParams();
  // const navigate = useNavigate();
  const page = '1';
  const detailsId = '1';
  const router = useRouter();
  const { isPending, isError, data, error } = useQueryPlanet(detailsId ?? '');
  const refresh = useQueryRefresh('planet', detailsId);

  const renderContent = () => {
    if (isPending) return <Loading />;
    if (isError) return <p className="text-red-500">{error.message}</p>;
    if (!data) {
      return <p className="text-gray-500">No found</p>;
    }
    return <DetailCard data={data} />;
  };
  return (
    <div className="relative bg-white flex-1 p-2">
      <div className="flex justify-end">
        <Button name="Refresh Planet" className="mr-2" onClick={refresh} />
        <Button
          variant="danger"
          name="X"
          onClick={() => router.push(`/${page}`)}
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
