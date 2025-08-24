import "./CompanyCard.css";
import { RevealSection } from "./RevealSection";

export const CompanyCard = ({
  name,
  subname,
  person,
  phone,
  email,
  website,
}) => {
  return (
    <RevealSection>
      <div className="company_card fade_item delay_0">
        <h3 className="company_name">{name}</h3>

        {subname ? <h4 className="company_name">{subname}</h4> : null}

        {person ? (
          <p className="company_person">
            <span className="material-symbols-outlined">person</span>
            {person}
          </p>
        ) : null}

        <p className="company_phone">
          <span className="material-symbols-outlined">call </span>
          {phone}
        </p>

        {email ? (
          <p className="company_email">
            <span className="material-symbols-outlined">alternate_email</span>
            {email}
          </p>
        ) : null}

        {website ? (
          <div className="company_website">
            <a
              href={website.startsWith("http") ? website : `https://${website}`}
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              <span className="material-symbols-outlined web_btn">
                language
              </span>
              Web
            </a>
          </div>
        ) : null}
      </div>
    </RevealSection>
  );
};
