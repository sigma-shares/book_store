import { createBrowserRouter } from "react-router-dom";
import Book from "../../pages/Book";
import Home from "../../pages/Home";
import Catalog from "../../pages/Catalog";
import UserProfile from "../../pages/UserProfile";
import WishList from "../../pages/WishList";
import Cart from "../../pages/Cart";
import Search from "../Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/description/:bookId",
    element: <Book />,
  },
  {
    path: "/userProfile",
    element: <UserProfile />,
  },
  {
    path: "/wishList",
    element: <WishList />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
