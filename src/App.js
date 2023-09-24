import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

//Routing
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./utils/store";

//Components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { ShimmerBlock, ShimmerLines } from "./components/Shimmer";
import RestaurantDetails from "./components/RestaurantDetails";
import Loader from "./components/Loader";
import RestaurantCards from "./components/RestaurantCard";
import CategoryDetails from "./components/CategoryDetails";

//lazy loading pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderSummary = lazy(() => import("./pages/OrderSummary"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerBlock />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerBlock />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/restaurant/category/:categoryId",
        element: <CategoryDetails />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/order-summary",
        element: (
          <Suspense fallback={<Loader />}>
            <OrderSummary />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
