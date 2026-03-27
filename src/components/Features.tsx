"use client";

import { motion } from "framer-motion";
import {
    Flame,
    Shield,
    Zap,
    Home,
    Car,
    Building2,
} from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: Zap,
        title: "Otomatik Aktivasyon",
        description:
            "Yangını otomatik algılar ve 3 saniyede devreye girer. İnsan müdahalesi gerektirmez.",
    },
    {
        icon: Shield,
        title: "Güvenli Kullanım",
        description:
            "İnsan ve çevre sağlığına zararsız formül. Profesyonel testlerden geçmiştir.",
    },
    {
        icon: Flame,
        title: "Elektrik Yangınlarına Uygun",
        description:
            "Elektrik panolarında ve cihazlarda güvenle kullanılabilir. Herhangi bir hasara yol açmaz.",
    },
];

const useCases = [
    {
        icon: Home,
        title: "Ev",
        description: "Mutfak, yatak odası, elektrik panosu",
    },
    {
        icon: Car,
        title: "Araç",
        description: "Otomobil, karavan, tekne, makine",
    },
    {
        icon: Building2,
        title: "İş Yeri",
        description: "Ofis, atölye, fabrika, elektrik odası",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                        Neden <span className="text-red-600">Fire Blocker</span>?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Modern teknoloji ile geleneksel güvenliği bir araya getiren devrim
                        niteliğinde bir ürün
                    </p>
                </motion.div>

                {/* Main Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="p-6 sm:p-8 h-full border-2 border-gray-100 rounded-xl hover:shadow-xl hover:border-red-600 transition-all duration-300 group bg-white"
                        >
                            <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {feature.description}
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* Product Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-16 sm:mb-20 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-12"
                >
                    <div className="max-w-4xl mx-auto">
                        <Image
                            src="/images/kutu_2.jpeg"
                            alt="Fire Blocker ürün kutusu - Otomatik yangın söndürücü"
                            width={800}
                            height={500}
                            className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* Use Cases */}
                <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
                        Kullanım Alanları
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Her ortamda yanınızda
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center hover:bg-red-50 transition-colors duration-300 group"
                        >
                            <useCase.icon className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
                                {useCase.title}
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {useCase.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
