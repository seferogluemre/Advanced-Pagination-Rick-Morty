import { createRoot } from "react-dom/client";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  RootPage,
  ErrorPage,
  CharactersPage,
  CharacterDetailPage,
} from "./assets/routes/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/characters",
        element: <CharactersPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "character:id",
            element: <CharacterDetailPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
