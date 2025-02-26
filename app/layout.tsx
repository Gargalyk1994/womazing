import { Raleway } from "next/font/google";
import "./globals.scss";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});


export default function Root1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        {children}
      </body>
    </html>
  );
}
