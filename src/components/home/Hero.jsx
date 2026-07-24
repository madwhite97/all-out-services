import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpeg";
import Button from "../ui/Button";

function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            <img
                src={heroImage}
                alt="All Out Services Project"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-orange-500">
                        Northeast Tennessee
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white">
                        Built To Last.
                        <br />
                        Built <span className="text-orange-500">All Out.</span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                        Professional excavation, retaining walls, concrete, land clearing,
                        forestry mulching, and complete site preparation.
                    </p>

                    <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                        <Button href="#contact">
                            Get a Free Estimate
                        </Button>

                        <Button href="#projects" variant="secondary">
                            View Our Work
                        </Button>
                    </div>

                    <div className="mt-12 mb-12 grid grid-cols-1 gap-4 text-center sm:mb-0 sm:grid-cols-3">
                        <span>✓ Licensed & Insured</span>
                        <span>✓ Free Estimates</span>
                        <span>✓ Residential & Commercial</span>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <a
                    href="#services"
                    className="flex items-center justify-center text-3xl text-white"
                    aria-label="Scroll to services"
                >
                    ⌄
                </a>
            </div>
        </section>
    );
}

export default Hero;