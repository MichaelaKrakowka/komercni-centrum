import React from "react";

import "./Form.css";
import { RevealSection } from "./RevealSection";
import emailjs from "emailjs-com";

export const Form = () => {
  const contactForm = React.useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_8lki0hn", // Service ID z EmailJS
        "template_js872vv", // Template ID
        contactForm.current,
        "c9eaT-nYK350tUif_" // Public Key (User ID)
      )
      .then(
        () => {
          alert("Zpráva úspěšně odeslána!");
          contactForm.current.reset();
        },
        (error) => {
          console.error("Chyba při odesílání:", error);
          alert("Něco se pokazilo. Zkus to znovu.");
        }
      );
  };

  return (
    <section className="contact_column" id="form">
      <RevealSection>
        <div className="form_container">
          <h2 className="secondary_heading fade_item delay_0">
            Kontaktujte nás
          </h2>
          <p>Máte otázku? Jsme jen zprávu daleko. </p>
          <p>
            Spojte se s námi jednoduše pomocí tohoto formuláře, ozveme se co
            nejdříve.
          </p>
        </div>
        <div className="form_container">
          <form
            ref={contactForm}
            onSubmit={sendEmail}
            className="form fade_item delay_1">
            <div className="form_field">
              <label className="form_label">Jméno</label>
              <input
                type="text"
                className="form_input"
                name="from_name"
                required
              />

              <label className="form_label">Email</label>
              <input
                type="email"
                className="form_input"
                name="from_email"
                required
              />
            </div>

            <div className="form_message">
              <label className="form_label">Zpráva</label>
              <textarea className="form_textarea" name="message" required />
            </div>
            <button type="submit" className="form_btn">
              Odeslat
            </button>
          </form>
        </div>
      </RevealSection>
    </section>
  );
};
