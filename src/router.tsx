import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/default';
import { appRoutes, publicRoutes } from './routes';
import { AppLayout } from './layouts/app';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/login" />} />
        {publicRoutes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}

        <Route path="/app" element={<AppLayout />}>
          <Route path="/app" element={<Navigate to="/app/dashboard" />} />
          {appRoutes.map((route) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}
