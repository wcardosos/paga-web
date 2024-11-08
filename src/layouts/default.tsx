import { Header } from '@/components/header';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div className="bg-zinc-900 text-zinc-200 px-6 min-h-screen">
      <Header />
      <main className="py-6">
        <Outlet />
      </main>
    </div>
  );
}