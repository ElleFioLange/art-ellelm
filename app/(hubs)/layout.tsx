import { ReactNode } from "react";

export default function HubLayout({ children }: { children: ReactNode }) {
  return (
    // All the styles are present in css.css
    <main className="hub-container">{children}</main>
  );
}
