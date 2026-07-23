import "../styles/forestry.css";

import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
    Plus,
    ArrowRight,
    ChevronDown,
    Leaf,
    ShieldCheck,
    MapPin,
    Trees,
    Clock3,
    Tractor,
    TreePine,
    DollarSign,
    BadgeCheck,
} from "lucide-react";

function ForestryMulching() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const features = [
        {
            icon: <Leaf size={42} />,
            title: "Eco-Friendly",
            text:
                "Forestry mulching naturally returns nutrients to the soil while reducing erosion without burning or hauling debris.",
        },
        {
            icon: <Tractor size={42} />,
            title: "Fast & Efficient",
            text:
                "Commercial CAT forestry equipment clears large areas quickly while minimizing disruption to the surrounding property.",
        },
        {
            icon: <ShieldCheck size={42} />,
            title: "Protects Your Property",
            text:
                "Selective clearing removes unwanted vegetation while preserving healthy trees and minimizing ground disturbance.",
        },
        {
            icon: <DollarSign size={42} />,
            title: "Cost Effective",
            text:
                "Grinding and cleanup happen in one pass, saving both time and money.",
        },
    ];

    const faqs = [
        {
            icon: <Leaf className="text-orange-500" size={20} />,
            question: "What is forestry mulching?",
            answer:
                "Forestry mulching grinds brush, saplings, and unwanted vegetation into mulch, eliminating the need to burn or haul debris away.",
        },
        {
            icon: <Tractor className="text-orange-500" size={20} />,
            question: "What types of properties do you clear?",
            answer:
                "We clear residential lots, hunting property, trails, fence rows, commercial sites, overgrown fields, and more.",
        },
        {
            icon: <TreePine className="text-orange-500" size={20} />,
            question: "Will healthy trees stay?",
            answer:
                "Absolutely. We selectively remove unwanted vegetation while preserving healthy trees whenever requested.",
        },
        {
            icon: <BadgeCheck className="text-orange-500" size={20} />,
            question: "Do you provide free estimates?",
            answer:
                "Yes! We provide free, no-obligation estimates throughout Northeast Tennessee.",
        },
        {
            icon: <MapPin className="text-orange-500" size={20} />,
            question: "What areas do you serve?",
            answer:
                "We proudly serve Northeast Tennessee and many surrounding communities.",
        },
    ];

    const galleryVideos = [
        "forestry-2.mp4",
        "forestry-3.mp4",
        "forestry-4.mp4",
        "forestry-5.mp4",
        "forestry-6.mp4",
        "forestry-7.mp4",
        "forestry-8.mp4",
        "forestry-9.mp4",
        "forestry-10.mp4",
        "forestry-11.mp4",
        "forestry-12.mp4",
    ];

    return (
        <>
            <Navbar />

            {/* ========== HERO ========== */}

            <section className="hero">

                {/* Background Video */}

                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/videos/forestry/hero.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Dark Overlay */}

                <div className="hero-overlay" />

                {/* Gradient */}
                
                <div className="hero-gradient" />

                {/* Content */}

                <div className="hero-container">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        className="hero-content"
                    >

                        <span className="hero-tag">

                            PROFESSIONAL FORESTRY MULCHING

                        </span>

                        <h1>

                            Clear Your Property
                            <br />

                            <span>Without Destroying It.</span>

                        </h1>

                        <p>

                            Professional forestry mulching for overgrown lots, hunting property, fence rows, trails, residential land, and commercial projects throughout Northeast Tennessee.

                        </p>

                        <div className="hero-buttons">

                            <HashLink
                                smooth
                                to="/#contact"
                                className="btn-primary"
                            >

                                Get A Free Estimate

                                <ArrowRight size={18} />

                            </HashLink>

                            <HashLink
                                smooth
                                to="/gallery"
                                className="btn-secondary"
                            >

                                View Our Work

                            </HashLink>

                        </div>

                        <div className="hero-pills">

                            <div className="hero-pill">

                                <Leaf size={18} />

                                <span>650+ Acres Cleared</span>

                            </div>

                            <div className="hero-pill">

                                <ShieldCheck size={18} />

                                <span>Licensed & Insured</span>

                            </div>

                            <div className="hero-pill">

                                <MapPin size={18} />

                                <span>Northeast Tennessee</span>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* Scroll Indicator */}

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="scroll-indicator"
                >

                    <ChevronDown />

                </motion.div>

            </section>

            {/* ================= WHY CHOOSE ================= */}

            <section className="features">

                <div className="section-heading">

                    <span className="section-tag">
                        WHY CHOOSE FORESTRY MULCHING
                    </span>

                    <h2>
                        A Smarter Way
                        <br />
                        to Clear Your Property
                    </h2>

                    <p>
                        Forestry mulching is one of the fastest and most environmentally friendly ways to reclaim overgrown property while protecting your soil and preserving healthy trees.
                    </p>

                </div>

                <div className="features-grid">

                    {features.map((feature, index) => (

                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                            }}
                        >

                            <div className="feature-top"></div>

                            <div className="feature-icon">

                                {feature.icon}

                            </div>

                            <h3>

                                {feature.title}

                            </h3>

                            <p>

                                {feature.text}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>

            {/* ====================
                EQUIPMENT
            =================== */}

            <section className="equipment">
                
                <div className="equipment-grid">
                    
                    {/* Image */}
                    
                    <motion.div
                        className="equipment-image"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >
                        
                        <img
                            src="/images/forestry/forestry-1.jpg"
                            alt="Forestry Mulching Equipment"
                        />
                        
                        <div className="equipment-badge">
                            
                            <span>Professional Grade</span>
                            
                            <strong>Forestry Mulcher</strong>
                            
                        </div>
                        
                    </motion.div>
                    
                    {/* Content */}
                    
                    <motion.div
                        className="equipment-content"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >
                        
                        <span className="section-tag">
                            
                            OUR EQUIPMENT

                        </span>
                        
                        <h2>
                            
                            Built For
                            <br />
                            
                            Tough Terrain.
                            
                        </h2>
                        
                        <p>
                            
                            Our commercial forestry mulching equipment clears dense brush, invasive growth, saplings, and underbrush without tearing up your property like traditional land clearing methods.

                        </p>
                        
                        <div className="equipment-list">
                            
                            <div className="equipment-item">
                                
                                <ShieldCheck size={22} />
                                
                                Minimal Ground Disturbance
                                
                            </div>
                            
                            <div className="equipment-item">
                                
                                <Leaf size={22} />
                                
                                Environmentally Friendly
                            </div>
                            
                            <div className="equipment-item">
                                
                                <Trees size={22} />
                                
                                Leaves Natural Mulch Behind
                            
                            </div>
                            
                            <div className="equipment-item">
                                
                                <Clock3 size={22} />
                                
                                Faster Than Traditional Clearing
                                
                            </div>
                            
                        </div>
                        
                        <HashLink
                            smooth
                            to="/#contact"
                            className="btn-primary"
                        >
                            
                            Request Your Estimate

                            <ArrowRight size={18} />
                        
                        </HashLink>
                        
                    </motion.div>
                    
                </div>
                
            </section>

            {/* ========== RECENT PROJECTS ========== */}

            <section className="projects">

                <div className="section-heading">

                    <span className="section-tag">

                        RECENT PROJECTS

                    </span>

                    <h2>

                        See Our Work
                        <br />

                        In Action

                    </h2>

                    <p>

                        Every property tells a different story. Here's a look at a few recent forestry mulching projects we've completed throughout Northeast Tennessee.

                    </p>

                </div>

                <div className="projects-grid">

                    {galleryVideos.slice(0, 6).map((video, index) => (

                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .5,
                                delay: index * .1,
                            }}
                        >

                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="project-video"
                            >

                                <source
                                    src={`/videos/forestry/${video}`}
                                    type="video/mp4"
                                />

                            </video>

                            <div className="project-overlay">

                                <span>

                                    Forestry Mulching

                                </span>

                            </div>

                        </motion.div>

                    ))}

                </div>

                <div className="projects-button">

                    <HashLink
                        smooth
                        to="/gallery"
                        className="btn-primary"
                    >

                        View Full Gallery

                        <ArrowRight size={18} />

                    </HashLink>

                </div>

            </section>

            {/* ========== FAQ ========== */}

            <section className="faq">

                <div className="section-heading">

                    <span className="section-tag">

                        FREQUENTLY ASKED QUESTIONS

                    </span>

                    <h2>

                        Questions We
                        <br />
                        Hear Most Often

                    </h2>

                    <p>

                        Have questions about forestry mulching or whether it's the right solution for your property? Here are some of the things we get asked most often.

                    </p>

                </div>

                <div className="faq-container">

                    {faqs.map((faq, index) => (

                        <motion.div
                            key={index}

                            className={`faq-item ${openFAQ === index ? "active" : ""}`}

                            initial={{ opacity: 0, y: 25 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}
                            
                            transition={{
                                duration: .4,
                                delay: index * .08
                            }}
                        >

                            <button
                                className="faq-question"

                                onClick={() =>
                                    setOpenFAQ(openFAQ === index ? null : index)
                                }
                            >

                                <span>

                                    {faq.question}

                                </span>

                                <Plus
                                    className={`faq-icon ${
                                        openFAQ === index ? "rotate" : ""
                                    }`}
                                    size={22}
                                />

                            </button>

                            <AnimatePresence>

                                {openFAQ === index && (

                                    <motion.div
                                        className="faq-answer"

                                        initial={{
                                            height: 0,
                                            opacity: 0
                                        }}

                                        animate={{
                                            height: "auto",
                                            opacity: 1
                                        }}

                                        exit={{
                                            height: 0,
                                            opacity: 0
                                        }}

                                        transition={{
                                            duration: .3
                                        }}
                                    >

                                        <p>

                                            {faq.answer}

                                        </p>

                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </motion.div>

                    ))}

                </div>

            </section>

            {/* ========== FINAL CTA ========== */}

            <section className="final-cta">

                <div className="cta-background"></div>

                <div className="cta-content">

                    <span className="section-tag">

                        READY TO GET STARTED?

                    </span>

                    <h2>

                        Let's Reclaim
                        <br />

                        Your Property.

                    </h2>

                    <p>

                        Whether you're clearing land for a new home, reclaiming hunting property, opening trails, or removing years of overgrowth, we're ready to help. Contact us today for a free, no-obligation estimate.

                    </p>

                    <div className="cta-buttons">

                        <HashLink
                            smooth
                            to="/#contact"
                            className="btn-primary"
                        >
                            
                            Get Your Free Estimate

                            <ArrowRight size={18} />

                        </HashLink>

                        <a
                            href="tel:+14237422060"
                            className="btn-secondary"
                        >

                            Call Us Today

                        </a>

                    </div>

                    <div className="cta-highlights">

                        <div>

                            <ShieldCheck size={20} />

                            <span>Licensed & Insured</span>

                        </div>

                        <div>

                            <Leaf size={20} />

                            <span>Free Estimates</span>

                        </div>

                        <div>

                            <MapPin size={20} />

                            <span>Northeast Tennessee</span>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= QUICK STATS ================= */}

            <section className="bg-[#111] border-t border-gray-800 py-16">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                        <div>
                            <h3 className="text-5xl font-black text-orange-500">
                                650+
                            </h3>
                            <p className="text-gray-400 mt-3">
                                Acres Cleared
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-black text-orange-500">
                                100%
                            </h3>
                            <p className="text-gray-400 mt-3">
                                Customer Focused
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-black text-orange-500">
                                FREE
                            </h3>
                            <p className="text-gray-400 mt-3">
                                Estimates
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-black text-orange-500">
                                LOCAL
                            </h3>
                            <p className="text-gray-400 mt-3">
                                Northeast TN
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>
    );
}

export default ForestryMulching;