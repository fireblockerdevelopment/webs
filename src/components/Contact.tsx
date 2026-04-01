"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    const [formData, setFormData] = useState({
        requestType: "siparis",
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);
        setIsSubmitting(false);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ requestType: "siparis", name: "", email: "", phone: "", message: "" });
        }, 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Bayilik / <span className="text-red-600">Sipariş </span> Formu
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Güvenliğiniz için bugün harekete geçin. Size en kısa sürede
                        ulaşalım.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                            <div>
                                <label htmlFor="contact-type" className="block text-sm mb-2 text-gray-300">
                                    Talep Türü *
                                </label>
                                <select
                                    id="contact-type"
                                    name="requestType"
                                    value={formData.requestType}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors text-sm sm:text-base appearance-none"
                                >
                                    <option value="siparis">Sipariş Ver</option>
                                    <option value="bayilik">Bayilik Başvurusu</option>
                                    <option value="diger">Diğer</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="contact-name" className="block text-sm mb-2 text-gray-300">
                                    Ad Soyad *
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors text-sm sm:text-base"
                                    placeholder="Adınız ve soyadınız"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm mb-2 text-gray-300">
                                    E-posta *
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors text-sm sm:text-base"
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-phone" className="block text-sm mb-2 text-gray-300">
                                    Telefon *
                                </label>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors text-sm sm:text-base"
                                    placeholder="0555 123 45 67"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm mb-2 text-gray-300">
                                    Mesajınız (Opsiyonel)
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none text-sm sm:text-base"
                                    placeholder="Varsa özel bir not bırakın..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className={`w-full py-3 sm:py-4 text-base sm:text-lg rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitted
                                    ? "bg-green-600 text-white"
                                    : "bg-red-600 hover:bg-red-700 text-white hover:shadow-lg hover:shadow-red-600/25"
                                    } disabled:opacity-80`}
                            >
                                {isSubmitted ? (
                                    "✓ Mesajınız Alındı!"
                                ) : isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            />
                                        </svg>
                                        Gönderiliyor...
                                    </span>
                                ) : (
                                    <>
                                        {formData.requestType === "bayilik"
                                            ? "Başvuru Gönder"
                                            : formData.requestType === "siparis"
                                                ? "Sipariş Talebi Gönder"
                                                : "Mesajı Gönder"}
                                        <Send className="group-hover:translate-x-1 transition-transform w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <p className="text-xs sm:text-sm text-gray-500 text-center">
                                * İşaretli alanlar zorunludur
                            </p>
                        </form>
                    </motion.div>

                    {/* Contact Info & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1770119082739-54f754e5aa1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                alt="Modern yangın güvenlik ekipmanları"
                                width={1080}
                                height={400}
                                className="w-full h-48 sm:h-64 object-cover"
                            />
                        </div>

                        {/* Contact Details */}
                        <div className="bg-red-950/30 border-2 border-red-600/30 rounded-2xl p-6 sm:p-8 space-y-5 sm:space-y-6">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                İletişim Bilgileri
                            </h3>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-bold mb-1 text-sm sm:text-base">Telefon</div>
                                    <div className="text-gray-400 text-sm sm:text-base">0850 123 45 67</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-bold mb-1 text-sm sm:text-base">E-posta</div>
                                    <div className="text-gray-400 text-sm sm:text-base">info@fireblocker.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <div className="font-bold mb-1 text-sm sm:text-base">Adres</div>
                                    <div className="text-gray-400 text-sm sm:text-base">
                                        Mahmutbey Mahallesi, 2427. Sokak, 144 Bağcılar
                                        <br />
                                        No: 123, 34000
                                        <br />
                                        İstanbul, Türkiye
                                    </div>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
