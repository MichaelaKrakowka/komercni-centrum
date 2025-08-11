import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root className="dialog_root" open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="mobile_open_menu"
          aria-label={
            open ? "Zavřít menu s navigací" : "Otevřít menu s navigací"
          }>
          {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
          {/* <HamburgerMenuIcon /> */}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="menu_overlay" />
        <Dialog.Content className="menu_content">
          <Dialog.Title>
            <VisuallyHidden>Hlavní menu</VisuallyHidden>
          </Dialog.Title>

          {/* <button className="close_btn">
              <Cross2Icon className="mobile_close_menu" />
            </button> */}
          <nav className="menu_links">
            <Dialog.Close asChild>
              <a href="#about" className="menu_link">
                O nás
              </a>
            </Dialog.Close>
            <Dialog.Close asChild>
              <a href="#services" className="menu_link">
                Služby
              </a>
            </Dialog.Close>
            <Dialog.Close asChild>
              <a href="#freeOffices" className="menu_link">
                Volné prostory
              </a>
            </Dialog.Close>
            <Dialog.Close asChild>
              <a href="#contact" className="menu_link">
                Kontakt
              </a>
            </Dialog.Close>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
