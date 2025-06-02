// components/layout/Header.tsx

"use client";

import { useState } from "react";
import HamburgerButton from "@/components/ui/HamburgerButton";
import Logo from "@/components/ui/Logo";
import MobileMenu from "@/components/ui/MobileMenu";

type NavLink = {
    _id: string;
    title: string;
    slug: { current: string };
};

type HeaderProps = {
    logoUrl: string;
    navLinks: NavLink[];
};

export default function Header({ logoUrl, navLinks }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between px-6 py-4">
                    <Logo href="/" size="lg" src={logoUrl} className="text-white" />
                    <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
                </div>
            </header>
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
        </>
    );
}
