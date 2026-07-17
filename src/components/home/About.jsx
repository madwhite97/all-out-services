import { motion } from "framer-motion";
import logo from "../../assets/images/logo-full.png";

import Container from "../ui/Container";
import Button from "../ui/Button";

function About() {
    return (
        <section id="about" className="bg-[#111827] py-28">

            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                            About All Out Services
                        </span>

                        <h2 className="mt-5 text-5xl font-black leading-tight">
                            Built To Last.
                            <br />
                            Built All Out.
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-gray-400">
                            At All Out Services, we believe quality work starts with honesty, crafstmanship, and attention to detail. From excavation and reatining walls to concrete, land clearing and forestry mulching, we treat every project like it's our own property.
                        </p>

                        <div className="mt-10 grid gap-5 text-lg">

                            <div>✓ Licensed & Insured</div>

                            <div>✓ Residential & Commercial</div>

                            <div>✓ Quality Craftsmanship</div>

                        </div>

                        <div className="mt-12">
                            <Button href="#contact">
                                Request a Free Estimate
                            </Button>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="flex justify-center bg-[#111827] p-4 rounded-2xl">
                        
                            <img
                                src={logo}
                                alt="All Out Services"
                                className="w-full max-w-xl"
                            />
                        </div>

                    </motion.div>

                </div>

            </Container>
        </section>
    );
}

export default About;