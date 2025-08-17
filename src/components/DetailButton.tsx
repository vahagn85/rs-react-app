'use client';

import Button from './Button';
import { useRouter } from 'next/navigation';

function DetailButton() {
  const router = useRouter();
  return (
    <div className="flex justify-end">
      <Button variant="danger" name="X" onClick={() => router.back()} />
    </div>
  );
}

export default DetailButton;
