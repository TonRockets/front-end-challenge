import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import PageLoading from 'components/page/PageLoading'
import Page from 'components/page/Page'

import paths from 'routes/paths'

const Home = lazy(() => import('pages/Home'))
const Login = lazy(() => import('pages/login/Login'))
const PageNotFound = lazy(() => import('pages/PageNotFound'))

type Routes = {
    path: string
    element: React.ReactNode
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
    <Suspense fallback={<PageLoading />}>
        <Page>
            <Component />
        </Page>
        </Suspense>
)
const routes: Routes[] = [
    { path: paths.HOME, element: getRouteElement(Home) },
    { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
    { path: paths.LOGIN, element: getRouteElement(Login) },
]

export default createBrowserRouter(routes)