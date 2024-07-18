import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainComponent } from "../components/MainComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
    errorElement: <div> Hubo un error!!</div>,
  },
]);

export const CustomRouterProvider = () => (
  <RouterProvider router={router}></RouterProvider>
);
