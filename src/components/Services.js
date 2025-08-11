import React from "react";
import "./Services.css";
import { CompanyCard } from "./CompanyCard";
import { companies } from "../data/companies";
import { RevealSection } from "./RevealSection";
import * as Select from "@radix-ui/react-select"; //filtrovani budov

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
          <Select.Root value={building} onValueChange={setBuilding}>
            <Select.Trigger className="rselect_trigger" aria-label="Budova">
              <Select.Value />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                className="rselect_content"
                position="popper" //nastavi, aby se mi menu zobrazovalo bud nahore nebo dole, podle toho kde je misto
                sideOffset={6}>
                <Select.Viewport className="rselect_viewport">
                  <Select.Item className="rselect_item" value="Komenskeho">
                    <Select.ItemText>Komenského ulice</Select.ItemText>
                  </Select.Item>
                  <Select.Item className="rselect_item" value="Kostelni">
                    <Select.ItemText>Kostelní ulice</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
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
