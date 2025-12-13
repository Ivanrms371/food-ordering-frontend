import { Footer } from "@components/ui/footer/Footer";
import { Header } from "@components/ui/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-30 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
