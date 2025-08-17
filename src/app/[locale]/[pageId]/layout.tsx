export default async function PageLayout({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-wrap">
      <div className="flex-1 border-r border-gray-400 p-2 bg-gray-100 dark:bg-gray-600">
        {children}
      </div>
      {details}
    </div>
  );
}
