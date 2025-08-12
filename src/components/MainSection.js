import "./MainSection.css";
import { About } from "./About";
import { Services } from "./Services";
import { ForLease } from "./ForLease";
import { Form } from "./Form";
import { Map } from "./Map";
import { Footer } from "./Footer";

export const MainSection = () => {
  return (
    <>
      <main>
        <About />
        <Services />
        <ForLease />
        <Form />
        <Map />
        <Footer />
      </main>
    </>
  );
};
