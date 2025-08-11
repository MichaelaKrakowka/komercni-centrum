import React from "react";
import "./Services.css";
import { CompanyCard } from "./CompanyCard";
import { companies } from "../data/companies";
import { RevealSection } from "./RevealSection";

export const Services = () => {
  return (
    <section id="services">
      <RevealSection>
        <h2 className="secondary_heading fade_item delay_0">Služby</h2>

        <div className="company_cards ">
          {companies.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </RevealSection>
    </section>
  );
};
