import React from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ForLease } from "./components/ForLease";
import { Form } from "./components/Form";
import { Map } from "./components/Map";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Services />
      <ForLease />
      <Form />
      <Map />
      <Footer />
    </div>
  );
};
