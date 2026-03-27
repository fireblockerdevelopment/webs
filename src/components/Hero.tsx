"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1758506971613-a15b98261650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    alt="Yangın güvenliği arka plan görseli"
                    fill
                    className="object-cover opacity-30"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 pt-28 sm:pt-36 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 sm:space-y-8 text-center lg:text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Yangından Korunmanın
                            <br />
                            <span className="text-red-600">Yeni Yolu</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            Otomatik yangın algılama ve söndürme. Her an yanınızda
                            taşıyabileceğiniz güvenlik çözümü.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10 justify-center lg:justify-start">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-semibold group flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/25"
                            >
                                Hemen Sipariş Ver
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("features")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-semibold transition-all duration-300"
                            >
                                Özellikleri Keşfet
                            </button>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-700"
                        >
                            {[
                                { value: "3 sn", label: "Otomatik Müdahale" },
                                { value: "%99.9", label: "Etkili Söndürme" },
                                { value: "10 yıl", label: "Raf Ömrü" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Promotional Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end w-full"
                    >
                        <div className="relative w-full max-w-lg aspect-[9/16] sm:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-red-600/20 border border-gray-800 bg-black">
                            <video
                                src="/videos/Fireblocker_Tanıtım_Videosu_with_captions.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                            {/* Glow effect behind video */}
                            <div className="absolute inset-0 -z-10 bg-red-600/20 blur-3xl rounded-full scale-105" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
