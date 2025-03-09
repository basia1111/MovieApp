"use client";
import SideBar from "@/components/layout/SideBar";
import { MoviesContextProvider } from "@/context/MoviesContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MoviesContextProvider>
      <div className="flex">
        <SideBar />
        <div className="mx-auto sm:p-12 p-4 md:w-3/4 w-full">
          <div className="max-w-[1200px]">{children}</div>
        </div>
      </div>
    </MoviesContextProvider>
  );
}
