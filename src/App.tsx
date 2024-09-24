import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  // Initialize Google Analytics 4
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID, {
      gaOptions: {
        cookieDomain: "auto",
        cookieFlags: "SameSite=None; Secure",
      },
    });

    // Track the initial page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Track page views when the route changes
  useEffect(() => {
    const unListen = window.addEventListener("popstate", () => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    });

    return () => {
      window.removeEventListener("popstate", unListen as any);
    };
  }, []);

  // Load the selected language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);

    // Track language change event
    ReactGA.event({
      category: "Language",
      action: "Change Language",
      label: `Language changed to ${lang}`,
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <MainLayout
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          }
        >
          <Route index element={<HomePage />} />
        </Route>

        {/* Fallback for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
