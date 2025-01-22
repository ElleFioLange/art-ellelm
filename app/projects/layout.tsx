export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-4/5 h-full md:w-full md:p-8 flex flex-col lg:flex-row">
      {children}
    </main>
  );
}
