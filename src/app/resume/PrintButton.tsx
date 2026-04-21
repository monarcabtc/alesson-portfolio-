"use client";

import { useState } from "react";

export default function PrintButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.querySelector(".cv") as HTMLElement;
      if (!element) return;
      const opt = {
        margin: [10, 14, 10, 14] as [number, number, number, number],
        filename: "Alesson_Souza_Resume.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
      };
      await html2pdf().set(opt).from(element).save();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      style={{
        background: loading ? "#a88850" : "#c9a96e",
        color: "#fff",
        border: "none",
        padding: "10px 22px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: loading ? "wait" : "pointer",
        letterSpacing: "0.02em",
        transition: "background 0.2s",
      }}
    >
      {loading ? "Generating PDF…" : "⬇ Download PDF"}
    </button>
  );
}
