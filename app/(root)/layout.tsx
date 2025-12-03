import { Footer } from "@components/ui/Footer";
import { Header } from "@components/ui/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-28 min-h-0 flex flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
