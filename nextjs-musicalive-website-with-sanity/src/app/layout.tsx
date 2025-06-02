import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { sanityClient } from "@/lib/sanity/client";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const settings = await sanityClient.fetch(`
    {
      "logo": *[_type == "siteSettings"][0].logo.asset->url,
      "navigation": *[_type == "mainNavigation"][0].items[]{
        title,
        hidden,
        "slug": page->slug.current,
        "pageTitle": page->title
      }
    }
  `)

    const logoUrl = settings.logo || ""
    const navLinks = (settings.navigation || []).filter((item: any) => !item.hidden)

    return (
        <html lang="nl" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${poppins.variable} antialiased flex flex-col min-h-screen relative top-0`}>
        <Header logoUrl={logoUrl} navLinks={navLinks} />
        {children}
        <Footer />
        </body>
        </html>
    );
}
