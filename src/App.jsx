import MainPage from "./components/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
