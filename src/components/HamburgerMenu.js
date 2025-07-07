import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={`mobile-menu-btn ${open ? "hidden" : ""}`}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}>
          <HamburgerMenuIcon />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <Dialog.Overlay asChild>
                <motion.div
                  className="DialogOverlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Dialog.Overlay>

              {/* Content */}
              <Dialog.Content className="DialogContent">
                <Dialog.Title>
                  <VisuallyHidden>Hlavní menu</VisuallyHidden>
                </Dialog.Title>

                <motion.div
                  className="menu-inner"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                  <Dialog.Close asChild>
                    <button className="close-btn" aria-label="Zavřít menu">
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                  <nav className="menu-links">
                    <a href="#Home">Domů</a>
                    <a href="#WhyUs">Proč my?</a>
                    <a href="#Form">Volné prostory</a>
                    <a href="#Contact">Kontakt</a>
                  </nav>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
