import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-myBlack text-myWhite font-manrope">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
