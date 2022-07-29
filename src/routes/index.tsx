import { FC } from 'react';
import { lazy, Suspense } from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';


interface RouteType {
    path: string;
    component: FC;
}


// Lazily load routes and code split.
const Home = lazy((): Promise<any> => import('../views/Home'));


const routes: RouteType[] = [
    {
        path: '/',
        component: Home
    }
];


const RouteWithSubRoutes: FC = () => {
    const Element = (Component: FC) => <Component />;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={Element(route.component)} />
                ))}
            </Routes>
        </Suspense >
    )
}

export default RouteWithSubRoutes;