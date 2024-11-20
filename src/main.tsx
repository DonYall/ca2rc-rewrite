import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/root/Root.tsx";
import Join from "./pages/join/Join.tsx";
import Team from "./pages/team/Team.tsx";
import NotFound from "./pages/error/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
