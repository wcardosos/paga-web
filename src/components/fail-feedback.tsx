import { PropsWithChildren } from 'react';

export function FailFeedback({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="flex items-center justify-center pt-10 text-center">
      {children}
    </div>
  );
}
