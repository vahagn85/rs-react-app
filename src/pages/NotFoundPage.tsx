// import { useNavigate } from 'react-router';
import Button from '../components/Button';

function NotFoundPage() {
  // const navigate = useNavigate();
  const handleClick = () => {
    // navigate('/', { replace: true });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-68px)] bg-gray-100 text-gray-800 px-4 text-center">
      <h1 className="text-8xl font-bold mb-4 text-indigo-600 text-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Button name="Go to Homepage" onClick={handleClick} />
    </div>
  );
}

export default NotFoundPage;
