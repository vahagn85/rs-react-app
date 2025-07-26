import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from './layout/RootLayout';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import HomeLayout from './layout/HomeLayout';
import Detail from './components/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => redirect('/1'),
      },
      {
        path: ':page',
        Component: HomeLayout,
        children: [{ path: ':detailsId', Component: Detail }],
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
