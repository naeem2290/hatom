import React, { useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

function App({ appServiceWorker }) {
  useEffect(() => {
    appServiceWorker.onInstalled();
  }, [appServiceWorker]);
  return (
    <div className="app-container">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
