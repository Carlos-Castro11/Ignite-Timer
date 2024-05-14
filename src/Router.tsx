import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { NotFound } from "./pages/NotFound";
import { DefaultLayout } from "./layouts/DefaultLayout";
// Constants
import { Constants } from "./Constants";

export function Router() {
  interface RouteProps {
    path: string;
    component: React.ReactNode;
  }

  const AppRoutes: RouteProps[] = [
    { path: Constants.URLS.HOME, component: <Home /> },
    { path: Constants.URLS.HISTORY, component: <History /> },
    { path: Constants.URLS.NOT_FOUND, component: <NotFound /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {AppRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
