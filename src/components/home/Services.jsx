import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Hammer,
    Tractor,
    Trees,
    Mountain,
    Shovel,
    Building2,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const services = [
    {
        title: "Concrete",
        description:
            "Driveways, sidewalks, patios, decorative concrete, and foundations built to last.",
        icon: Hammer,
    },
    {
        title: "Excavation",
        description:
            "Excavation, grading, trenching, and site development for residential and commercial properties.",
        icon: Tractor,
    },
    {
        title: "Retaining Walls",
        description:
            "Custom retaining walls engineered for strength, drainage, and lasting curb appeal.",
        icon: Building2,
    },
    {
        title: "Land Clearing",
        description:
            "Brush removal, tree clearing, and complete property preparation for new projects.",
        icon: Trees,
    },
    {
        title: "Forestry Mulching",
        description:
            "Environmentally friendly vegetation management with specialized forestry mulching equipment.",
        icon: Mountain,
    },
    {
        title: "Site Preparation",
        description:
            "Preparing your property for new construction with grading, leveling, and precision.",
        icon: Shovel,
    },
];

function Services() {
    return (
        <section id="services" className="bg-[#111827] pb-10">

            <Container className="pt-8">

                <SectionHeading
                    eyebrow="Professional Services"
                    title="What We Do"
                    titleClassName="text-5xl md:text-6xl"
                    description="From excavation and grading to decorative concrete and retaining walls, All Out Services delivers quality workmanship throughout Northeast Tennessee."
                />

                <div className="mt-16 mb-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <motion.div
                                className="h-full"
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                            >
                                <Link to="/gallery">
                                    <Card className="group flex h-full min-h-[340px] flex-col cursor-pointer p-8 ...">

                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15">
                                            <Icon size={34} className="text-orange-500" />
                                        </div>

                                        <div className="mt-8 flex flex-1 flex-col">
                                            
                                            <h3 className="text-2xl font-bold">
                                                {service.title}
                                            </h3>

                                            <p className="mt-4 flex-1 leading-8 text-gray-400">
                                                {service.description}
                                            </p>

                                            <div className="mt-8 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24"></div>

                                        </div>

                                    </Card>

                                </Link>

                            </motion.div>
                        );

                    })}

                </div>

            </Container>
        </section>
    );
}

export default Services;