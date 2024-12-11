import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootPage, ErrorPage } from './assets/routes/index.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children:[
      {
          
      }


    ]



  }






])









createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)