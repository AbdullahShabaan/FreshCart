import "./App.css";
import Register from "./components/Pages/Register/Register";
import Login from "./components/Pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import Categories from "./components/Pages/Categories/Categories";
import Brands from "./components/Pages/Brands/Brands";
import NotFound from "./components/Pages/NotFound/NotFound";
import AuthContextProvider from "./Contexts/AuthContext";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";
import ProtectAuthRoute from "./components/ProtectRoute/ProtectAuthRoute";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import Cart from "./components/Pages/Cart/Cart";
import { QueryClient, QueryClientProvider } from "react-query";
import CheckOutConfirm from "./components/CheckOutConfirm/CheckOutConfirm";
import Products from "./components/Pages/Products/Products";
import { Offline } from "react-detect-offline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import Orders from "./components/Pages/Orders/Orders";
import CartCountProvider from "./Contexts/CartCountContext";
import WishList from "./components/Pages/WishList/WishList";
import SubCategories from "./components/Pages/SubCategories/SubCategories";
import ForgetPassword from "./components/Pages/ForgetPassword/ForgetPassword";
import ResetPasswordCode from "./components/Pages/ResetPasswordCode/ResetPasswordCode";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword";
import ProtectRePassword from "./components/ProtectRoute/ProtectRePassword";
import ForgetPassProvider from "./Contexts/ForgetPassContext";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <ProtectAuthRoute>
              <Login />
            </ProtectAuthRoute>
          ),
        },
        {
          path: "/forgetPassword",
          element: (
            <ProtectAuthRoute>
              <ForgetPassword />
            </ProtectAuthRoute>
          ),
        },
        {
          path: "/resetPassword/:email",
          element: (
            <ProtectRePassword>
              <ResetPassword />
            </ProtectRePassword>
          ),
        },
        {
          path: "/register",
          element: (
            <ProtectAuthRoute>
              <Register />
            </ProtectAuthRoute>
          ),
        },
        {
          path: "/resetPasswordCode/:email",
          element: (
            <ProtectRePassword>
              <ResetPasswordCode />
            </ProtectRePassword>
          ),
        },
        {
          path: "/categories",
          element: (
            <ProtectRoute>
              <Categories />
            </ProtectRoute>
          ),
        },
        {
          path: "/brands",
          element: (
            <ProtectRoute>
              <Brands />
            </ProtectRoute>
          ),
        },

        {
          path: "/Cart",
          element: (
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          ),
        },
        {
          path: "/productDetails/:id",
          element: (
            <ProtectRoute>
              <ProductDetails />
            </ProtectRoute>
          ),
        },
        {
          path: "/checkOut/:id",
          element: (
            <ProtectRoute>
              <CheckOutConfirm />
            </ProtectRoute>
          ),
        },
        {
          path: "/products",
          element: (
            <ProtectRoute>
              <Products />
            </ProtectRoute>
          ),
        },
        {
          path: "/allorders",
          element: (
            <ProtectRoute>
              <Orders />
            </ProtectRoute>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <ProtectRoute>
              <WishList />
            </ProtectRoute>
          ),
        },
        {
          path: "/subCategories/:categoryId/:categoryName",
          element: (
            <ProtectRoute>
              <SubCategories />
            </ProtectRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <ForgetPassProvider>
        <QueryClientProvider client={queryClient}>
          <CartCountProvider>
            <RouterProvider router={router}></RouterProvider>
            <Offline>
              <div className="fixed bottom-5 start-2 bg-gray-200 px-5 py-2 rounded-lg">
                <FontAwesomeIcon icon={faWifi} className="text-red-600 me-2" />
                You are currently offline
              </div>
            </Offline>
          </CartCountProvider>
        </QueryClientProvider>
      </ForgetPassProvider>
    </AuthContextProvider>
  );
}

export default App;
