import MainPage from "./components/Pages/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ProductViewPage from "./components/Pages/ProductViewPage/ProductViewPage";
import CartPage from "./components/Pages/CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: 'products/:productId/details',
    element: <ProductViewPage />,
  },
  {
    path: "cart",
    element: <CartPage />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
