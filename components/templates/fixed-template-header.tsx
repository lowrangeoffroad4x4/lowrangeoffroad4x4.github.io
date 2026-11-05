"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";
import { isFixedTemplate } from "@/lib/fixed-template/mode";

/** One consistent header for the fixed Yorich skin on home and guide routes.
 * Preserve the original brand / wrapper classes; avoid importing the specimen's
 * demo nav markup or data-nav JavaScript. */
export function FixedTemplateHeader({ links }: { links: InternalLink[] }) {
  const pathname = usePathname() || "/";
  const [expanded, setExpanded] = useState(false);
  if (!isFixedTemplate()) return null;
  const isHome = pathname.replace(/\/+$/, "") === "";
  const nav = (
    <>
      <button
        type="button"
        className="yorich-mobile-nav-toggle"
        aria-label={expanded ? "Close menu" : "Open menu"}
        aria-expanded={expanded}
        aria-controls="yorich-site-nav"
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Close ✕" : "Menu ☰"}
      </button>
      <nav id="yorich-site-nav" aria-label="Primary navigation" className={`yorich-primary-nav${expanded ? " is-open" : ""}`}>
        {links.map((link) => {
          const href = routePath(link.slug);
          const active = (pathname.replace(/\/+$/, "") || "/") === (href.replace(/\/+$/, "") || "/");
          return (
            <a key={link.slug || "home"} href={href} aria-current={active ? "page" : undefined} className={`yorich-primary-nav-link${active ? " active" : ""}`} onClick={() => setExpanded(false)}>
              {link.label}
            </a>
          );
        })}
      </nav>
    </>
  );
  const brand = (
    <Link className="brand yorich-brand" href="/" aria-label="Low Range Offroad 4x4 home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="brand-logo" alt={siteConfig.assets.logoAlt ?? "Low Range logo"} src={assetPath(siteConfig.assets.logo)} />
      <strong>{siteConfig.game.name || siteConfig.shortName}</strong>
    </Link>
  );
  return isHome ? (
    <header className="top yorich-fixed-header"><div className="wrap top-inner yorich-header-row">{brand}{nav}</div></header>
  ) : (
    <header className="template-inner-header yorich-fixed-header"><div className="template-inner-row yorich-header-row">{brand}{nav}</div></header>
  );
}
