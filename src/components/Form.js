import React from "react";

import "./Form.css";
import { RevealSection } from "./RevealSection";
import emailjs from "emailjs-com";

export const Form = () => {
  const contactForm = React.useRef();
  const [personName, setPersonName] = React.useState(" ");
  const [email, setEmail] = React.useState("@");
  const [message, setMessage] = React.useState(" ");

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
          alert("Zpráva byla úspěšně odeslána! Děkujeme!");
          contactForm.current.reset();
          setPersonName("");
          setEmail("@");
          setMessage("");
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
          <div className="contact_paragraph">
            <p>Máte otázku? Jsme jen zprávu daleko. </p>
            <p>
              Spojte se s námi jednoduše pomocí tohoto formuláře, ozveme se co
              nejdříve.
            </p>
          </div>
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
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                className="form_input"
                name="from_name"
                required
              />

              <label className="form_label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form_input"
                name="from_email"
                required
              />
            </div>

            <div className="form_message">
              <label className="form_label">Zpráva</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form_textarea"
                name="message"
                required
              />
            </div>

            <div className="form_gdpr">
              <input
                type="checkbox"
                className="checkbox"
                id="gdpr"
                name="gdprConsent"
                required
              />
              <div className="gdpr_paragraph">
                <p>
                  Odesláním tohoto formuláře souhlasíte se zpracováním vašich
                  údajů pouze za účelem vyřízení vašeho dotazu.{" "}
                </p>{" "}
                <p>
                  Vámi poskytnuté údaje (jméno, e-mail, text zprávy) používáme
                  výhradně za účelem odpovědi na váš dotaz.
                </p>{" "}
                <p>
                  Údaje neukládáme déle, než je nezbytně nutné pro vyřízení
                  komunikace, a nepředáváme je žádné třetí straně.{" "}
                </p>{" "}
                <p>
                  V případě dotazů nás můžete kontaktovat prostřednictvím
                  formuláře.
                </p>
              </div>
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
