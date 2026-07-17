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
            "Professional excavation, grading, trenching, and site development for residential and commercial projects.",
        icon: Tractor,
    },
    {
        title: "Retaining Walls",
        description:
            "Custom retaining walls engineered for durability, drainage, and curb appeal.",
        icon: Building2,
    },
    {
        title: "Land Clearing",
        description:
            "Brush removal, tree clearing, and complete property preparation.",
        icon: Trees,
    },
    {
        title: "Forestry Mulching",
        description:
            "Environmentally friendly vegetation management with specialized equipment.",
        icon: Mountain,
    },
    {
        title: "Site Preparation",
        description:
            "Preparing your property for new construction.",
        icon: Shovel,
    },
];

function Services() {
    return (
        <section id="services" className="bg-[#111827] pb-10">

            <Container className="pt-20">

                <SectionHeading
                    eyebrow="Professional Services"
                    title="What We Do"
                    titleClassName="text-5xl md:text-6xl"
                    description="From excavation and grading to decroative concrete and retaining walls, All Out Services delivers quality workmanship throughout Northeast Tennessee."
                />

                <div className="mt-16 mb-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <motion.div
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
                                    
                                    <Card className="group h-full cursor-pointer p-8 transition-all duration-200 hover:-translate-y-2">
                                        
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15">
                                        
                                            <Icon
                                                size={34}
                                                className="text-orange-500"
                                            />
                                        </div>
                                        
                                        <h3 className="mt-8 text-2xl font-bold">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="mt-4 leading-8 text-gray-400">
                                            {service.description}
                                        </p>
                                        
                                        <div className="mt-8 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24"></div>

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