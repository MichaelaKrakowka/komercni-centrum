import React from "react";
import "./About.css";
import { RevealSection } from "./RevealSection";

export const About = () => {
  return (
    <section id="about" className="main_part">
      <RevealSection>
        <div className="main_content">
          <div className="about_section">
            <img
              className="square_img fade_item delay_1"
              src="/komer5.png"
              alt="Náměstí v Novém Bohumíně"
            />
            <div className="main_about">
              <h1 className="main_heading fade_item delay_0">Podnikejte</h1>
              <h1 className="main_heading fade_item delay_0">v centru dění</h1>

              <div className="main_paragraph">
                <p className="fade_item delay_2">
                  Pod správu Komerčního centra spadají dvě budovy na adresách
                  Kostelní 363 a Komenského 554 <br /> v Novém Bohumíně. Obě
                  lokality nabízejí širokou škálu služeb <br />
                  pro veřejnost – od kosmetiky, kadeřnictví, manikúry,
                  advokátních služeb až po kurzy angličtiny a mnoho dalšího. Ať
                  už hledáte péči
                  <br />o sebe, odborné poradenství nebo vzdělání, u nás to
                  najdete pohodlně a na dosah.
                </p>
                <p className="fade_item delay_3">
                  Díky skvělé poloze máte vše <br />
                  na dosah bez zbytečného cestování.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
};
