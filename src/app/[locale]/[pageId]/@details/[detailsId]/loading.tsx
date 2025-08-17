import Loader from '../../../../../components/Loading';

export default function Loading() {
  return (
    <div className="relative bg-white flex-1 p-2">
      <div className="flex justify-center pt-20">
        <Loader />
      </div>
    </div>
  );
}
