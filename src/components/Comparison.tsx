"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

const tableHeaders = [
    { id: "feature", label: "Özellik Karşılaştırması", align: "left" },
    { id: "fireblocker", label: "FIREBLOCKER", align: "center", isHighlighted: true },
    { id: "others", label: "DİĞER SİSTEMLER", align: "center" },
];

const comparisonData = [
    {
        feature: "Kolay Kurulum",
        fireblocker: true,
        others: false,
    },
    {
        feature: "Müdahele Gerektirmez",
        fireblocker: true,
        others: false,
    },
    {
        feature: "Dar ve Kapalı Alanlar için Uygun",
        fireblocker: true,
        others: false,
    },
    {
        feature: "Çoklu kullanım alanı",
        fireblocker: true,
        others: false,
    },
    {
        feature: "Otomatik Müdahale",
        fireblocker: true,
        others: false,
    },
];

const StatusIcon = ({ status, isPrimary = false }: { status: boolean; isPrimary?: boolean }) => {
    if (status) {
        return (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto shadow-lg ${isPrimary ? "bg-green-600 shadow-green-600/30" : "bg-green-500 shadow-green-500/20"}`}>
                <Check className="w-5 h-5 text-white" />
            </div>
        );
    }
    return (
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            <X className="w-5 h-5 text-gray-400" />
        </div>
    );
};

export default function Comparison() {
    return (
        <section id="karsilastirma" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight uppercase">
                        FIREBLOCKER <span className="text-red-600">VS DİĞERLERİ</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Neden tercih edildiğimizi rakamlarla ve gerçek özelliklerle görün.
                    </p>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-white border-b-2 border-gray-100">
                                    {tableHeaders.map((header) => (
                                        <th
                                            key={header.id}
                                            className={`py-8 px-6 text-sm font-bold uppercase tracking-wider ${header.align === "left" ? "text-left pl-10" : "text-center"
                                                } ${header.isHighlighted ? "text-red-600 bg-red-50/30 relative" : "text-gray-500"}`}
                                        >
                                            {header.isHighlighted && (
                                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600"></div>
                                            )}
                                            {header.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group hover:bg-gray-50/50 transition-colors"
                                    >
                                        <td className="py-6 px-6 pl-10 border-b border-gray-50 text-base font-semibold text-gray-800">
                                            {row.feature}
                                        </td>
                                        <td className="py-6 px-6 border-b border-gray-50 bg-red-50/10 text-center">
                                            <StatusIcon status={row.fireblocker} isPrimary={true} />
                                        </td>
                                        <td className="py-6 px-6 border-b border-gray-50 text-center">
                                            <StatusIcon status={row.others} />
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-medium">
                    <p className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" /> Tam Koruma
                    </p>
                    <p className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" /> Profesyonel Bakım Gereksinimi
                    </p>
                    <p className="flex items-center gap-2">
                        <X className="w-5 h-5 text-red-500" /> Yetersiz Müdahale
                    </p>
                </div>
            </div>
        </section>
    );
}
