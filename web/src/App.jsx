import React, { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// layouts
import { RootLayout, AuthLayout, DashboardLayout } from "./layouts";

// middleware
// import { PrivateRoute } from "./middleware";

// pages
import {
  Home,
  Dashboard,
  WebScrapping,
  SentimentAnalysis,
  TopicModelling,
  Insights,
  Engagements,
  Users,
  PageNotFound,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="users" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route> */}
      <Route
        path="dashboard"
        element={
          // <PrivateRoute>
          <DashboardLayout />
          // </PrivateRoute>
        }
      >
        <Route path="home" element={<Dashboard />} />
        <Route path="web-scrapping" element={<WebScrapping />} />
        <Route path="sentiment-analysis" element={<SentimentAnalysis />} />
        <Route path="topic-modelling" element={<TopicModelling />} />
        <Route path="insights" element={<Insights />} />
        <Route path="engagements" element={<Engagements />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </Fragment>
  );
};

export default App;
