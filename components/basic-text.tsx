import { ReactNode } from "react";

export default function BasicText({ children }: { children: ReactNode }) {
  return (
    <main className="h-full w-full overflow-auto flex justify-center p-4">
      <section className="max-w-xl sm:mt-[32dvh] sm:mb-[16dvh] max-sm:mt-[16dvh] max-sm:mb-[8dvh] h-min [&>p]:mb-1">
        {children}
      </section>
    </main>
  );
}
