import React from "react";
import "./Services.css";
import { CompanyCard } from "./CompanyCard";
import { companies } from "../data/companies";
import { RevealSection } from "./RevealSection";
import * as Select from "@radix-ui/react-select"; //filtrovani budov

export const Services = () => {
  const [building, setBuilding] = React.useState("Komenskeho");
  const [cardsVisible, setCardsVisible] = React.useState(true);

  const filteredCompanies = companies.filter(
    (company) => company.id === building
  );

  React.useEffect(() => {
    setCardsVisible(false);
    const timeout = setTimeout(() => {
      setCardsVisible(true);
    });
    return () => clearTimeout(timeout);
  }, [building]);

  return (
    <section id="services">
      <RevealSection>
        <h2 className="secondary_heading fade_item delay_0">Služby</h2>
        <div className="buildings_filter fade_item delay_1">
          <Select.Root value={building} onValueChange={setBuilding}>
            <Select.Trigger className="rselect_trigger" aria-label="Budova">
              <Select.Value />
              <Select.Icon className="select_icon"> ▼</Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                className="rselect_content"
                position="popper" //nastavi, aby se mi menu zobrazovalo bud nahore nebo dole, podle toho kde je misto
                sideOffset={6}>
                <Select.Viewport className="rselect_viewport">
                  <Select.Item className="rselect_item" value="Komenskeho">
                    <Select.ItemText>Komenského ulice </Select.ItemText>
                  </Select.Item>
                  <Select.Item className="rselect_item" value="Kostelni">
                    <Select.ItemText>Kostelní ulice</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </RevealSection>

      {cardsVisible && (
        <RevealSection>
          <div className="company_cards fade_item delay_2">
            {filteredCompanies.map((company, index) => (
              <CompanyCard key={index} {...company} />
            ))}
          </div>
        </RevealSection>
      )}
    </section>
  );
};
