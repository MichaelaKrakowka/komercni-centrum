import React from "react";
import "./Services.css";
import { CompanyCard } from "./CompanyCard";
import { companies } from "../data/companies";

export const Services = () => {
  return (
    <section>
      <h2 className="secondary_heading">Služby</h2>
      <div className="company_cards">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </section>
  );
};
