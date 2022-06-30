import React, { useEffect } from "react";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App({ appServiceWorker }) {
  useEffect(() => {
    appServiceWorker.onInstalled();
  }, [appServiceWorker]);
  return (
    <div className="app-container">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
