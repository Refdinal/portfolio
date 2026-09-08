"use client";

import { cn } from "@/lib/utils";

export function WhatsAppLink({ number, message, className, children, "aria-label": ariaLabel }) {
  const handleOpen = (event) => {
    event.preventDefault();
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    window.open(`https://wa.me/${number}${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      role="link"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          handleOpen(event);
        }
      }}
      aria-label={ariaLabel || "Chat via WhatsApp"}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </a>
  );
}
