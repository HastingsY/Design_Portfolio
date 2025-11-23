import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  onNext,
  onPrev,
}: ImageModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Stacked Prev/Next controls on the right */}
              {(onPrev || onNext) && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  {onPrev && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-slate-100 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  )}

                  {onNext && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-slate-100 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  )}
                </div>
              )}

              {/* Image */}
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
