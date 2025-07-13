import React from "react";
import "./Services.css";
import { CompanyCard } from "./CompanyCard";
import { companies } from "../data/companies";

export const Services = () => {
  return (
    <section className="company_cards">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </section>
  );
};
