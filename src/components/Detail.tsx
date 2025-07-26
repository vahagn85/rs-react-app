import { useParams } from 'react-router';

function Detail() {
  const { detailsId } = useParams();

  return (
    <div className=" flex-1 p-2">
      <div className="w-full max-w-xl mx-auto px-4 py-8">
        <p>Showing details for item ID: {detailsId}</p>
      </div>
    </div>
  );
}

export default Detail;
