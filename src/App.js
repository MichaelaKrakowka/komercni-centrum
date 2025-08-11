import React from "react";
import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
// import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <MainSection />
      {/* <Footer /> */}
    </div>
  );
};
