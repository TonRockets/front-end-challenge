import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import {Page, PageLoading} from 'components';
import paths from 'routes/paths';
import 'components/styles/global.module.scss'

const Login = lazy(async () => await import('pages/login/Login'));
const PageNotFound = lazy(async () => await import('pages/PageNotFound'));

type Routes = {
   path: string;
   element: React.ReactNode;
};

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Page>
         <Component />
      </Page>
   </Suspense>
);
const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Login) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
   { path: paths.LOGIN, element: getRouteElement(Login) }
];

export default createBrowserRouter(routes);
