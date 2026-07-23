import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../../styles/forestry.css";

function Hero() {
    return (
        <section className="hero">

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

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="hero-tag">
                    Forestry Mulching
                </span>

                <h1>
                    Clear Your Property
                    <br />
                    Without Destroying It
                </h1>

                <p>
                    Fast, efficient forestry mulching for overgrown lots, trails, fence lines, hunting property, and land management throughout Northeast Tennessee.
                </p>

                <div className="hero-buttons">

                    <HashLink
                        smooth
                        to="/#contact"
                        className="primary-btn"
                    >
                        Get a Free Estimate
                    </HashLink>

                    <Link to="/gallery" className="secondary-btn">
                        View Our Work
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Hero;