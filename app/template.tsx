import type { ReactNode } from "react";
import PageEffects from "@/components/PageEffects";

// A template, unlike a layout, remounts on every navigation, which is what
// lets PageEffects run once per page.
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <PageEffects />
    </>
  );
}
