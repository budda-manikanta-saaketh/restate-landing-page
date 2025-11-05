import React from "react";
import { Route, Routes } from "react-router-dom";
import RestateApp from "./restate";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RestateApp />} />
      <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default App;
