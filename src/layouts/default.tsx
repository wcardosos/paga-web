import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div className="bg-zinc-900 text-zinc-200 px-6 min-h-screen">
      <div className="mx-auto max-w-screen-lg">
        <Outlet />
      </div>
    </div>
  );
}
