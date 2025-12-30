import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
export { router };
