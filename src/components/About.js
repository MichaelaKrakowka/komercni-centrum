import React from "react";
import "./About.css";
import { RevealSection } from "./RevealSection";

export const About = () => {
  const [rotation, setRotation] = React.useState(false);
  const handleToggle = () => {
    setRotation((prev) => !prev);
  };
  return (
    <section className="main_part">
      <RevealSection>
        <div className="main_content">
          <h1 className="main_heading fade_item delay_0">
            Podnikejte <br /> v centru dění
          </h1>
          <div
            className={`flip-card ${rotation ? "flipped" : ""}`}
            onClick={handleToggle}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="square_img fade_item delay_1"
                  src="/namesti.png"
                  alt="Náměstí v Novém Bohumíně"
                />
              </div>
              <div className="flip-card-back">
                <img
                  className="square_img"
                  src="/kom-cem2.jpg"
                  alt="Budova Komenského"
                />
              </div>
            </div>
          </div>

          <p className="main_paragraph fade_item delay_2">
            Pod správu Komerčního centra spadají dvě budovy na adresách Kostelní
            363 a Komenského 554 <br /> v Novém Bohumíně. Obě lokality nabízejí
            širokou škálu služeb <br />
            pro veřejnost – od kosmetiky, kadeřnictví, manikúry, advokátních
            služeb až po kurzy angličtiny a mnoho dalšího. Ať už hledáte péči
            <br />o sebe, odborné poradenství nebo vzdělání, u nás to najdete
            pohodlně a na dosah.
          </p>
          <p className="main_paragraph fade_item delay_3">
            Díky skvělé poloze máte vše <br />
            na dosah bez zbytečného cestování.
          </p>
        </div>
      </RevealSection>
    </section>
  );
};
