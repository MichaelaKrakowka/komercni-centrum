import "./ForLease.css";
import { RevealSection } from "./RevealSection";
import { advantage } from "../data/advantage";

export const ForLease = () => {
  return (
    <section id="forLease">
      <RevealSection>
        <h2 className="secondary_heading fade_item delay_0">
          Volné prostory k podnikání
        </h2>
        <h3
          className="fade_item delay_1"
          style={{ textAlign: "center", fontSize: "24px" }}>
          Proč podnikat u nás
        </h3>
      </RevealSection>
      <div className="advantage_container ">
        {advantage.map((item) => (
          <RevealSection key={item.id}>
            <div className="advantage_card fade_item delay_2">
              <div className="advantage_circle">
                <span className="material-symbols-outlined symbols_advantage">
                  {item.iconName}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
};
