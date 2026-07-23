import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shovel } from "lucide-react";

export default function PromoStrip() {
    return (
        <section className="-mt-16 relative z-20 mb-20">

            <div className="mx-auto w-[92%] max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1b1b] via-[#171717] to-[#0f172a] p-10 shadow-[0_30px_80px_rgba(0,0,0,.45)] md:p-14"
                >

                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

                    <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-orange-600/10 blur-3xl" />

                    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                        {/* Left Side */}

                        <div className="max-w-3xl">

                            <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                                🔥 NOW OFFERING
                            </span>

                            <div className="mt-6 flex items-center gap-4">

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15">

                                    <Shovel className="text-orange-500" size={34} />

                                </div>

                                <div>

                                    <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                        Professional
                                        <span className="block text-orange-500">
                                            Septic Installation
                                        </span>
                                    </h2>

                                </div>

                            </div>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                                All Out Services now provides licensed residential
                                and commercial septic system installation
                                throughout Northeast Tennessee with the same
                                quality workmanship and attention to detail
                                we're known for.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-white">

                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="text-orange-500" size={18} />
                                    Licensed
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="text-orange-500" size={18} />
                                    Residential & Commercial
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="text-orange-500" size={18} />
                                    Free Estimates
                                </span>

                            </div>

                        </div>

                        {/* Right Side */}

                        <div className="flex justify-center lg:justify-end">

                            <Link
                                to="/septic"
                                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/30"
                            >
                                Explore Our Septic Services

                                <ArrowRight
                                    size={20}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />

                            </Link>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}