import { Footer } from "@components/sections/Footer";
import { Header } from "@components/sections/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-0 flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
