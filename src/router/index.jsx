import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
