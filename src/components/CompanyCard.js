import React from "react";
import "./CompanyCard.css";

export const CompanyCard = ({ name, phone, email, website }) => {
  return (
    <div className="company_card">
      <h2 className="company_name">{name}</h2>
      <p className="company_phone">{phone}</p>
      <p className="company_email">{email}</p>
      <a href={website} className="company_website">
        {website}
      </a>
    </div>
  );
};
