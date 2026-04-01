"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

const tableHeaders = [
    { id: "feature", label: "Özellik Karşılaştırması" },
    { id: "fireblocker", label: "FIREBLOCKER", isHighlighted: true },
    { id: "traditional", label: "Standart Yangın Söndürücü" },
    { id: "sprinkler", label: "Otomatik Sprinkler" },
    { id: "gas", label: "Gazlı Söndürme Sistemleri" },
    { id: "balls", label: "Söndürme Topları" },
];

type Status = "yes" | "no" | "warning";

interface ComparisonRow {
    feature: string;
    fireblocker: Status;
    traditional: Status;
    sprinkler: Status;
    gas: Status;
    balls: Status;
}

const comparisonData: ComparisonRow[] = [
    {
        feature: "Otomatik Müdahale (İnsan Gücü Gerektirmez)",
        fireblocker: "yes",
        traditional: "no",
        sprinkler: "yes",
        gas: "yes",
        balls: "yes",
    },
    {
        feature: "Kompakt, Temiz ve Hafif Çözüm",
        fireblocker: "yes",
        traditional: "no",
        sprinkler: "no",
        gas: "no",
        balls: "no",
    },
    {
        feature: "Kolay Kurulum (Yapıştır ve Geç)",
        fireblocker: "yes",
        traditional: "warning",
        sprinkler: "no",
        gas: "no",
        balls: "no",
    },
    {
        feature: "Kablo, Tesisat veya Güç Gerektirmez",
        fireblocker: "yes",
        traditional: "no",
        sprinkler: "no",
        gas: "no",
        balls: "yes",
    },
    {
        feature: "Kullanım Sonrası Kalıntı Bırakmaz",
        fireblocker: "yes",
        traditional: "no",
        sprinkler: "no",
        gas: "yes",
        balls: "no",
    },
    {
        feature: "Dar ve Kapalı Alanlar İçin Uygun (Elektrik Panosu vb.)",
        fireblocker: "yes",
        traditional: "no",
        sprinkler: "no",
        gas: "no",
        balls: "no",
    },
    {
        feature: "Minimum Bakım Gerektirir",
        fireblocker: "yes",
        traditional: "warning",
        sprinkler: "no",
        gas: "no",
        balls: "warning",
    },
    {
        feature: "Çoklu Alan Kullanımı (Araç, Pano, Ev)",
        fireblocker: "yes",
        traditional: "no",
        sprinkler: "no",
        gas: "no",
        balls: "no",
    },
];

const RenderIcon = ({ status }: { status: Status }) => {
    if (status === "yes") {
        return (
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center mx-auto shadow-lg shadow-red-600/40">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
        );
    }
    if (status === "warning") {
        return (
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </div>
        );
    }
    return (
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto">
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </div>
    );
};

export default function Comparison() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 uppercase tracking-tight">
                        FIREBLOCKER <span className="text-red-600">VS DİĞERLERİ</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Neden geleneksel yangın güvenliği çözümlerinden çok daha üstün olduğumuzu keşfedin.
                    </p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px] border-collapse">
                            <thead>
                                <tr>
                                    {tableHeaders.map((header, index) => (
                                        <th
                                            key={header.id}
                                            className={`py-6 px-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 border-gray-100 ${
                                                header.isHighlighted
                                                    ? "text-red-600 bg-red-50/30 border-l-2 border-r-2 border-l-red-100 border-r-red-100 relative"
                                                    : "text-gray-500 bg-white"
                                            } ${index === 0 ? "text-left pl-8 w-1/4" : "w-[12%]"}`}
                                        >
                                            {header.isHighlighted && (
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
                                            )}
                                            {header.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, rowIndex) => (
                                    <motion.tr
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: rowIndex * 0.05, duration: 0.4 }}
                                        key={rowIndex}
                                        className="group"
                                    >
                                        <td className="py-5 px-4 pl-8 border-b border-gray-100 text-sm sm:text-base font-semibold text-gray-800 bg-white group-hover:bg-gray-50 transition-colors">
                                            {row.feature}
                                        </td>
                                        <td className="py-5 px-4 text-center border-b border-gray-100 bg-red-50/30 border-l-2 border-r-2 border-l-red-100 border-r-red-100">
                                            <RenderIcon status={row.fireblocker} />
                                        </td>
                                        <td className="py-5 px-4 text-center border-b border-gray-100 bg-white group-hover:bg-gray-50 transition-colors">
                                            <RenderIcon status={row.traditional} />
                                        </td>
                                        <td className="py-5 px-4 text-center border-b border-gray-100 bg-white group-hover:bg-gray-50 transition-colors">
                                            <RenderIcon status={row.sprinkler} />
                                        </td>
                                        <td className="py-5 px-4 text-center border-b border-gray-100 bg-white group-hover:bg-gray-50 transition-colors">
                                            <RenderIcon status={row.gas} />
                                        </td>
                                        <td className="py-5 px-4 text-center border-b border-gray-100 bg-white group-hover:bg-gray-50 transition-colors">
                                            <RenderIcon status={row.balls} />
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500 max-w-3xl mx-auto space-y-2">
                    <p className="flex items-center justify-center gap-2">
                        <span className="inline-block w-4 h-4 rounded-full bg-red-600 flex-shrink-0"></span> Fireblocker patenti / tasarım tescili koruması altındadır.
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" /> Standart ürünlerde bakım ve kurulum zorlukları yaşanabilir.
                    </p>
                </div>
            </div>
        </section>
    );
}
