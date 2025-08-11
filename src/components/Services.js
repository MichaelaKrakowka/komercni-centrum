import React from "react";
import "./Services.css";
import { CompanyCard } from "./CompanyCard";
import { companies } from "../data/companies";
import { RevealSection } from "./RevealSection";

export const Services = () => {
  const [building, setBuilding] = React.useState("Komenskeho");

  const filteredCompanies = companies.filter(
    (company) => company.id === building
  );

  return (
    <section id="services">
      <RevealSection>
        <h2 className="secondary_heading fade_item delay_0">Služby</h2>
        <div className="buildings_filter">
          <select
            className="building"
            value={building}
            onChange={(company) => setBuilding(company.target.value)}>
            <option value="Komenskeho">Komenského ulice</option>
            <option value="Kostelni">Kostelní ulice</option>
          </select>
        </div>

        <div className="company_cards ">
          {filteredCompanies.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </RevealSection>
    </section>
  );
};
