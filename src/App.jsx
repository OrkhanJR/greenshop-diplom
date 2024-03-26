import MainPage from "./components/Pages/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ProductViewPage from "./components/Pages/ProductViewPage/ProductViewPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import ProductCheckoutPage from "./components/Pages/ProductCheckoutPage/ProductCheckoutPage";
import BlogPage from "./components/Pages/BlogPage/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "products/:productId/details",
    element: <ProductViewPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "/cart/checkout",
    element: <ProductCheckoutPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
