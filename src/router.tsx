import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/default';
import { appRoutes } from './routes';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {appRoutes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
