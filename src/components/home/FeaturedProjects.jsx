import { motion } from "framer-motion";
import projects from "../../data/projects";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function FeaturedProjects() {
    return (
        <section id="projects" className="bg-[#0B0B0B] py-28">

            <Container>

                <SectionHeading
                    eyebrow="Our Work"
                    title="Projects We're Proud Of"
                    description="Every project is completed with attention to detail, quality craftsmanship, and pride in the finished result."
                />

                <div className="space-y-24">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`grid items-center gap-14 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                        >
                            <div className="overflow-hidden rounded-3xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                                />
                            </div>

                            <div>

                                <span className="inline-block rounded-full bg-orange-500/15 px-4 py-2 text-sm font-semibold text-orange-500">
                                    {project.category}
                                </span>

                                <h3 className="mt-6 text-4xl font-black">
                                    {project.title}
                                </h3>

                                <p className="mt-6 text-lg leading-8 text-gray-400">
                                    {project.description}
                                </p>

                                <div className="mt-10">
                                    <Link to="/gallery">
                                        <Button>
                                            View Gallery
                                        </Button>
                                    </Link>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </Container>
        </section>
    );
}

export default FeaturedProjects;