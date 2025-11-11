// components/Lightbox.tsx
import React, { useEffect } from "react";

type Props = {
  open: boolean;
  src: string | null;
  alt?: string;
  onClose: () => void;
};

const Lightbox: React.FC<Props> = ({ open, src, alt = "", onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !src) return null;

  return (
    <div
      className="lb-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <figure className="lb-card" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="lb-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {alt && <figcaption className="lb-caption">{alt}</figcaption>}
      </figure>
    </div>
  );
};

export default Lightbox;
