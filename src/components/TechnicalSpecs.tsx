"use client";

import { motion } from "framer-motion";
import {
    Package,
    Droplets,
    Gauge,
    Award,
    Clock,
    ThermometerSun,
} from "lucide-react";
import Image from "next/image";

const specs = [
    { icon: Package, label: "Ağırlık", value: "10 gram" },
    { icon: Gauge, label: "Model", value: "QRR0.01G/S-FA" },
    {
        icon: Droplets,
        label: "Söndürücü Tip",
        value: "Sr(NO₃)₂60%/KNO₃ 20%",
    },
    {
        icon: ThermometerSun,
        label: "Çalışma Sıcaklığı",
        value: "-50°C / +90°C",
    },
    { icon: Clock, label: "Raf Ömrü", value: "10 Yıl" },
    { icon: Award, label: "Standart", value: "EN 15276-1:2019" },
];

const certifications = [
    {
        title: "CE Sertifikalı",
        description: "Avrupa standartlarına uygun",
        image: "/images/ce-logo.png"
    },
    {
        title: "TSE Onaylı",
        description: "Türk Standartları Enstitüsü",
        image: "/images/tse-logo.png"
    },
    {
        title: "RoHS Belgeli",
        description: "Tehlikeli madde içermez",
        image: "/images/rohs-logo.png"
    },
    {
        title: "EMC Uyumluluğu",
        description: "Elektromanyetik uyumluluk",
        image: "/images/emc-logo.png"
    },
];

const packageContents = [
    "1 adet Fire Blocker otomatik yangın söndürücü",
    "Kullanım kılavuzu (Türkçe)",
    "Montaj aparatı",
    "Garanti belgesi",
];

export default function TechnicalSpecs() {
    return (
        <section id="specs" className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                        Teknik <span className="text-red-600">Bilgiler</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Profesyonel performans, kompakt boyut
                    </p>
                </motion.div>

                {/* Product Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
                    >
                        <Image
                            src="/images/tanıtım_2.jpeg"
                            alt="Fire Blocker ürünü yakından görünüm"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center mt-4 text-gray-600 font-medium text-sm sm:text-base">
                            Kompakt ve Kullanışlı Tasarım
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex items-center justify-center"
                    >
                        <Image
                            src="/images/tanıtım_1.jpeg"
                            alt="Fire Blocker teknik etiket bilgileri"
                            width={400}
                            height={400}
                            className="w-full max-w-md h-auto"
                        />
                    </motion.div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600"
                        >
                            <spec.icon className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 mb-3 sm:mb-4" />
                            <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                                {spec.label}
                            </div>
                            <div className="text-lg sm:text-xl font-bold text-black">
                                {spec.value}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-black">
                        Sertifikalar ve Standartlar
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="text-center">
                                <div className="h-16 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <Image src={cert.image} alt={cert.title} width={80} height={80} className="max-h-full w-auto object-contain" />
                                </div>
                                <h4 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">
                                    {cert.title}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
