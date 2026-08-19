import type { ReactNode } from "react";
import { SessionBrandChrome } from "@/components/session-brand-chrome";

export default function AppTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionBrandChrome />
      {children}
    </>
  );
}
