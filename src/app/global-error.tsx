'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button className="bg-blue-500 text-white p-2" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
