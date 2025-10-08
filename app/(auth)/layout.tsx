import { BrandLogo } from "@components/ui/BrandLogo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen grid lg:grid-cols-2
    "
    >
      <div className="px-4 lg:px-10 max-w-2xl mx-auto w-full  flex justify-center items-center">
        <main className="max-w-lg w-full m-auto">
          <BrandLogo className="mx-auto size-16 mb-10" />
          {children}
        </main>
      </div>

      <aside className="bg-[url('/images/auth-burger.jpg')] bg-cover bg-center relative hidden lg:block">
        <div className="bg-gray-950/50 absolute inset-0"></div>
      </aside>
    </div>
  );
}
