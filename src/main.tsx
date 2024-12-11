import { createRoot } from 'react-dom/client'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootPage, ErrorPage, CharactersPage } from './assets/routes/index.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/characters",
        element: <CharactersPage />
      },

    ]


  }






])









createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)