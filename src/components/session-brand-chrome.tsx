"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const BRAND_CHROME_CSS = String.raw`
  :root {
    --anuncia-brand-orange: #f1662a;
    --anuncia-brand-orange-soft: #ff8a47;
  }

  a[aria-label="AnunciaAI, página inicial"] {
    gap: 0.68rem !important;
  }

  a[aria-label="AnunciaAI, página inicial"] > span[aria-hidden="true"] {
    display: none !important;
  }

  a[aria-label="AnunciaAI, página inicial"]::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='w' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23aeb0b6'/%3E%3C/linearGradient%3E%3ClinearGradient id='o' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop stop-color='%23ff9a4d'/%3E%3Cstop offset='0.52' stop-color='%23f1662a'/%3E%3Cstop offset='1' stop-color='%23d94812'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M10 51 27 12c1.8-4 7.5-4 9.3 0L53 51H42.5l-4.1-10H24.1L20 51H10Zm17.8-19h7L31.4 23 27.8 32Z' fill='url(%23w)'/%3E%3Cpath d='M8 43c13.5-9.2 29.8-13.3 49-12.4-9.5 3.2-20 8.2-30.9 15.2-5.7 3.7-11.2 3-18.1-2.8Z' fill='url(%23o)'/%3E%3C/svg%3E");
    filter: drop-shadow(0 7px 12px rgba(0,0,0,.22));
  }

  @media (max-width: 639px) {
    a[aria-label="AnunciaAI, página inicial"]::before {
      width: 27px;
      height: 27px;
      flex-basis: 27px;
    }
  }

  html[data-anuncia-session="authenticated"] footer a[href="/entrar"],
  html[data-anuncia-session="authenticated"] footer a[href^="/entrar?"],
  html[data-anuncia-session="authenticated"] footer [data-auth-action="login"] {
    display: none !important;
  }

  html[data-anuncia-session="authenticated"] footer {
    border-top-color: rgba(255,255,255,.075) !important;
  }

  html[data-anuncia-session="authenticated"] footer a[href="/conta"] {
    color: rgba(255,255,255,.72);
  }

  @media (prefers-reduced-motion: no-preference) {
    a[aria-label="AnunciaAI, página inicial"]::before {
      transition: transform 180ms ease, filter 180ms ease;
    }

    a[aria-label="AnunciaAI, página inicial"]:hover::before {
      transform: translateY(-1px);
      filter: drop-shadow(0 8px 14px rgba(241,102,42,.16));
    }
  }
`;

export function SessionBrandChrome() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    const root = document.documentElement;

    if (isPending) {
      root.dataset.anunciaSession = "pending";
      return;
    }

    root.dataset.anunciaSession = session ? "authenticated" : "guest";

    return () => {
      delete root.dataset.anunciaSession;
    };
  }, [isPending, session]);

  return <style dangerouslySetInnerHTML={{ __html: BRAND_CHROME_CSS }} />;
}
