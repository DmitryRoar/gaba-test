import { Spinner } from '@ui';

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center p-12">
      <Spinner size="lg" />
    </div>
  );
}
