import "./../styles/Septic.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    Home,
    ClipboardCheck,
    Shovel,
    ArrowRight,
} from "lucide-react";

const galleryMedia = [
    {
        type: "video",
        src: "/videos/septic/septic-hero.mp4",
    },
    {
        type: "image",
        src: "/images/septic/septic-1.jpeg",
    },
    {
        type: "image",
        src: "/images/septic/septic-2.jpeg",
    },
    {
        type: "image",
        src: "/images/septic/septic-3.jpg",
    },
];

const services = [
    {
        icon: Home,
        title: "New System Installation",
        description:
            "Complete septic system installation for new homes and construction projects."
    },
    {
        icon: ClipboardCheck,
        title: "Permit & Site Coordination",
        description:
            "We work with your approved design and ensure every installation meets local requirements.",
    },
    {
        icon: Shovel,
        title: "Excavation Included",
        description:
            "From digging to final grading, we handle the entire installation process.",
    },
];

export default function Septic() {
    return (
        <div className="septic-page">

            {/* ====================
                Hero
            ==================== */}

            <section className="septic-hero">

                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/videos/septic/septic-hero.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="hero-overlay" />

                <div className="container">

                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="section-label">
                            SEPTIC SYSTEMS
                        </span>

                        <h1>
                            Professional
                            <span>Septic System Installation</span>
                        </h1>

                        <p>
                            Licensed septic system installation for residential and commercial properties throughout Northeast Tennessee.
                        </p>

                        <div className="hero-buttons">

                            <Link
                                to="/#contact"
                                className="btn btn-primary"
                            >
                                Get a Free Estimate
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="hero-pills">
                            <span>Licensed</span>
                            <span>Residential</span>
                            <span>Commercial</span>
                        </div>

                    </motion.div>

                </div>

            </section>

            {/* ====================
                What We Offer
            ==================== */}

            <section className="services-section">

                <div className="container">

                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <span className="section-label">
                            OUR SERVICES
                        </span>

                        <h2>
                            Complete Septic Installation From Start to Finish
                        </h2>

                        <p>
                            Whether you're building a new home or replacing an existing system, our team provides professional excavation and septic installation with quality workmanship every step of the way.
                        </p>

                    </motion.div>

                    <div className="services-grid">

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <motion.div
                                    key={service.title}
                                    className="service-card"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15
                                    }}
                                >

                                    <div className="service-icon">
                                        <Icon size={34} />
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ===================
                Recent Projects
            ==================== */}

            <section className="gallery-section">

                <div className="container">

                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        <span className="section-label">
                            RECENT PROJECTS
                        </span>

                        <h2>
                            See Our Work
                        </h2>

                        <p>
                            Every property is different, but our commitment to quality workmanship remains the same.
                        </p>

                    </motion.div>

                    <motion.div
                        className="featured-video"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <video
                            controls
                            playsInline
                            preload="metadata"
                            className="gallery-video"
                        >

                            <source
                                src={galleryMedia[0].src}
                                type="video/mp4"
                            />
                        </video>

                    </motion.div>

                    <div className="photo-grid">

                        {galleryMedia.slice(1).map((item, index) => (

                            <motion.div
                                key={index}
                                className="photo-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15
                                }}
                            >

                                <img
                                    src={item.src}
                                    alt="Septic installation"
                                />

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ====================
                Call To Action
            ==================== */}

            <section className="cta-section">

                <div className="container">

                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <span className="section-label">
                            READY TO GET STARTED?
                        </span>

                        <h2>
                            Let's Build Your Septic System Right
                        </h2>

                        <p>
                            Whether you're building a new home or replacing an existing system, our experienced team is ready to provide dependable septic installation from excavation to final grading.
                        </p>

                        <div className="cta-buttons">

                            <Link
                                to="/#contact"
                                className="btn btn-primary"
                            >
                                Get a Free Estimate
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="cta-highlights">
                            <span>✔ Licensed</span>
                            <span>✔ Free Estimates</span>
                            <span>✔ Northeast Tennessee</span>
                        </div>

                    </motion.div>

                </div>

            </section>

        </div>
    );
}