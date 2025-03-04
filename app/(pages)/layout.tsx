import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer, HeaderPage } from "../../shared/components/shared";
import "../../shared/commonStyles/globals.scss";



const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Womazing",
    description: "Интернет-магазин Womazing",
};

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="en">
            <body className={`${raleway.className}`}>
                <HeaderPage />
                {children}
                <Footer />
            </body>
        </html>
    );
}
