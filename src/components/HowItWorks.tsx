"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Yerleştirin",
        description: "Fire Blocker'ı yangın riski olan alana monte edin",
    },
    {
        number: "02",
        title: "Otomatik Aktivasyon",
        description: "Alev ile temasta ve ya 170 derece sıcaklığa ulaştığında",
    },
    {
        number: "03",
        title: "Anında Müdahale",
        description: "Anında otomatik olarak devreye girer",
    },
    {
        number: "04",
        title: "Yangın Söner",
        description: "Yangın etkili bir şekilde söndürülür",
    },
];

const safetyTips = [
    "Cihazı doğrudan aleve tutmayınız",
    "Yetkili izni olmadan cihazı açmayınız",
    "Cizhaz söndürmeyi tamamladıktan sonra aşırı ısınacaktır lütfen dokunmayınız",
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Nasıl <span className="text-red-600">Çalışır</span>?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Sadece 4 basit adımda yangını kontrol altına alın
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="text-6xl sm:text-7xl font-bold text-red-600/20 mb-3 sm:mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                {step.description}
                            </p>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-red-600/30" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Safety Tips */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-red-950/30 border-2 border-red-600/30 rounded-2xl p-6 sm:p-8 md:p-12"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                        Güvenlik İpuçları
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {safetyTips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-start gap-3"
                            >
                                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm sm:text-base">{tip}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
