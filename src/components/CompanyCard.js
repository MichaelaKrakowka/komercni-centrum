import React from "react";
import "./CompanyCard.css";

export const CompanyCard = ({ name, subname, phone, email, website }) => {
  return (
    <div className="company_card">
      <h3 className="company_name">{name}</h3>
      <h4 className="company_name">{subname}</h4>

      <p className="company_phone">
        <span className="material-symbols-outlined">call</span>
        {phone}
      </p>
      <p className="company_email">
        <span className="material-symbols-outlined">alternate_email</span>
        {email}
      </p>
      <div className="company_website">
        <a
          href={website.startsWith("http") ? website : `https://${website}`}
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          <span className="material-symbols-outlined">home</span>
          {website}
        </a>
      </div>
    </div>
  );
};
