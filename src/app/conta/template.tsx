import type { ReactNode } from "react";

export default function AccountTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        footer a[href="/entrar"],
        footer a[href^="/entrar?"] {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
