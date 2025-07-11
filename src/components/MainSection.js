import "./MainSection.css";
import { About } from "./About";
import { Services } from "./Services";
import { FreeOffice } from "./FreeOffice";
import { Contact } from "./Contact";

export const MainSection = () => {
  return (
    <>
      <main>
        <About />
        <Services />
        <FreeOffice />
        <Contact />
      </main>
    </>
  );
};
