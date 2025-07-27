import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section className="main_part">
      <div className="main_content">
        <h1 className="main_heading">Podnikejte v centru dění</h1>
        <img
          className="square_img"
          src="/namesti.png"
          alt="Náměstí v Novém Bohumíně"></img>
        <p className="main_paragraph">
          Pod správu Komerčního centra spadají dvě budovy na adresách Kostelní
          363 a Komenského 554 v Novém Bohumíně. Obě lokality nabízejí širokou
          škálu služeb pro veřejnost – od kosmetiky, kadeřnictví, manikúry,
          advokátních služeb až po kurzy angličtiny a mnoho dalšího. Ať už
          hledáte péči o sebe, odborné poradenství nebo vzdělání, u nás to
          najdete pohodlně a na dosah.
        </p>
        <p className="main_paragraph">
          Díky skvělé poloze máte vše na dosah bez zbytečného cestování.
        </p>
      </div>
    </section>
  );
};
