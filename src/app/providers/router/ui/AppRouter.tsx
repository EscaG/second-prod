import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { routeConfig } from 'shared/config/routeConfig/ro0uteConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<div>Loading...</div>}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

