"use client";

import { footer, profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-sm font-semibold text-text-primary">
            {profile.firstName}
            <span className="text-gold">.</span>
          </span>
          <span className="text-text-muted text-xs">{footer.copyright}</span>
        </div>
        <p className="text-text-muted text-xs">{footer.note}</p>
      </div>
    </footer>
  );
}
