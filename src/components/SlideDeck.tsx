// slide deck for ppt presentation
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/Slides.css";

// Vite-bundled worker – this must come from the SAME pdfjs-dist version you just installed
/// @ts-ignore
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

type Props = { fileUrl: string; className?: string };

export default function SlideDeck({ fileUrl, className }: Props) {
  const [pdfData, setPdfData] = useState<Uint8Array | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(860);

  // Fetch the PDF asset and pass raw bytes to react-pdf
  useEffect(() => {
    let cancelled = false;
    setPdfData(null);
    setLoadErr(null);

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} fetching PDF`);
        return res.arrayBuffer();
      })
      .then((buf) => {
        if (!cancelled) setPdfData(new Uint8Array(buf));
      })
      .catch((err) => {
        console.error("PDF fetch error:", err);
        if (!cancelled) setLoadErr(err?.message ?? "Failed to load PDF file.");
      });

    return () => {
      cancelled = true;
    };
  }, [fileUrl]);

  // Responsive width
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (containerRef.current) setWidth(containerRef.current.clientWidth);
    });
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth);
      ro.observe(containerRef.current);
    }
    return () => ro.disconnect();
  }, []);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(numPages, p + 1));

  // Keyboard: ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [numPages]);

  const cloned = pdfData ? pdfData.slice(0) : null;

  return (
    <div className={`slide-wrap ${className ?? ""}`} ref={containerRef}>
      {loadErr && (
        <div className="slide-error">Failed to load PDF: {loadErr}</div>
      )}

      {cloned && (
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={(err) => {
            console.log("pdfjs version:", pdfjs.version);
            setLoadErr(err?.message ?? "Failed to load PDF.");
          }}
        >
          {numPages > 0 && (
            <Page
              pageNumber={page}
              width={Math.min(width, 1200)}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          )}
        </Document>
      )}

      <div className="slide-controls" aria-label="Slide navigation">
        <button
          className="slide-btn"
          onClick={prev}
          disabled={page <= 1}
          aria-label="Previous slide"
          title="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="slide-status">
          {page} / {numPages || "—"}
        </span>
        <button
          className="slide-btn"
          onClick={next}
          disabled={page >= numPages}
          aria-label="Next slide"
          title="Next"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
