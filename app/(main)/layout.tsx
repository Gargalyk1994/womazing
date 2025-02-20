import type { Metadata } from "next";
import { Footer, HeaderMain } from "../../shared/components/shared";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});


export const metadata: Metadata = {
  title: "Womazing",
  description: "Интернет-магазин Womazing",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <HeaderMain />
        {children}
        <Footer />
      </body>
    </html>
  );
}
