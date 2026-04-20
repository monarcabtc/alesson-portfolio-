"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print-btn"
      style={{
        background: "#c9a96e",
        color: "#fff",
        border: "none",
        padding: "10px 22px",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        letterSpacing: "0.02em",
      }}
    >
      ⬇ Download / Print PDF
    </button>
  );
}
