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
        <div className="m-auto sm:p-12 p-4 ">
          <div className="max-w-[1200px]">{children}</div>
        </div>
      </div>
    </MoviesContextProvider>
  );
}
