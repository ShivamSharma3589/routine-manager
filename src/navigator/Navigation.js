/**
 * This is the main navigation page contains all the routes
 * @author: shivam.sharma2@velsof.com
 * @date : 02-02-2023
 */
import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CustomLoader } from "../components";

function Navigation() {
  //#region for components calling
  const HomePage = lazy(() => import("../pages/home-page/HomePage"));
  const AddRoutinePage = lazy(() => import("../pages/add-routine-page/AddRoutinePage"));
  const Page1 = lazy(() => import("../pages/page-1/Page1"));
  const Page2 = lazy(() => import("../pages/page-2/Page2"));
  const Page3 = lazy(() => import("../pages/page-3/Page3"));
  //#endregion

  return (
    <Suspense fallback={<CustomLoader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<CustomLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/add-new-routine"
          element={
            <Suspense fallback={<CustomLoader />}>
              <AddRoutinePage />
            </Suspense>
          }
        />
        <Route
          path="/page-1"
          element={
            <Suspense fallback={<CustomLoader />}>
              <Page1 />
            </Suspense>
          }
        />
        <Route
          path="/page-2"
          element={
            <Suspense fallback={<CustomLoader />}>
              <Page2 />
            </Suspense>
          }
        />
        <Route
          path="/page-3"
          element={
            <Suspense fallback={<CustomLoader />}>
              <Page3 />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default Navigation;
