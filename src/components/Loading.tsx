function Loading() {
  return (
    <div className="text-center mt-20">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-9 w-9 border-t-4 border-blue-500" />
      </div>
      <p className="text-xl font-bold mt-2">Please wait. The file is large</p>
    </div>
  );
}

export default Loading;
