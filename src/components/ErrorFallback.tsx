import Button from './Button';

interface FallbackProps {
  resetError: () => void;
}

const ErrorFallback = (props: FallbackProps) => {
  const { resetError } = props;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
      <Button name="Try Again" onClick={resetError} />
    </div>
  );
};

export default ErrorFallback;
