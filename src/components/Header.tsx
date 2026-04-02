"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import Image from "next/image";

const navItems = [
    { label: "Fireblocker Nedir ?", href: "#what-is" },
    { label: "Nasıl Çalışır", href: "#how-it-works" },
    { label: "Özellikler", href: "#features" },
    { label: "Teknik Bilgiler", href: "#specs" },
    { label: "İletişim", href: "#contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20"
                : "bg-black/80 backdrop-blur-sm"
                } border-b border-gray-800/50`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="flex items-center gap-2 sm:gap-3 group"
                        aria-label="Fire Blocker Ana Sayfa"
                    >
                        <Image
                            src="/images/fireblocker-logo.png"
                            alt="Fireblocker Logo"
                            width={300}
                            height={300}
                            className="h-16 sm:h-20 md:h-24 w-auto object-contain transform scale-[1.85] sm:scale-[1.8] md:scale-[2] origin-left"
                            priority
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Ana menü">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="bg-red-600 hover:bg-red-700 text-white px-5 lg:px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
                        >
                            Bayilik / Sipariş
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                        aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/98 border-t border-gray-800 overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 space-y-1" aria-label="Mobil menü">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-gray-300 hover:text-white transition-colors text-left py-3 border-b border-gray-800/50 text-base"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                onClick={() => scrollToSection("#contact")}
                                className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-lg font-semibold mt-3 transition-colors"
                            >
                                Bayilik / Sipariş
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
