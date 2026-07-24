import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-navbar.png";
import Button from "../ui/Button";

const links = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-[#0B0B0B]/95 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-6">

                <HashLink
                    smooth
                    to="/#hero"
                    className="flex items-center"
                >
                    <img
                        src={logo}
                        alt="All Out Services"
                        className="h-16 w-auto lg:h-20"
                    />
                </HashLink>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">

                    {links.map((link) => (
                        <HashLink
                            smooth
                            key={link.name}
                            to={`/${link.href}`}
                            className="text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:text-orange-500"
                        >
                            {link.name}
                        </HashLink>
                    ))}

                    <Link
                        to="/services/forestry-mulching"
                        className="text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:text-orange-500"
                    >
                        Forestry Mulching
                    </Link>

                    <HashLink smooth to="/#contact">
                        <Button>
                            Free Estimate
                        </Button>
                    </HashLink>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-10 w-10 items-center justify-center text-3xl text-white transition hover:text-orange-500 lg:hidden"
                    aria-label="Open Menu"
                >
                    ☰
                </button>

            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <div className="border-t border-white/10 bg-[#0B0B0B] lg:hidden">

                    <div className="flex flex-col px-5 py-4">

                        {links.map((link) => (
                            <HashLink
                                smooth
                                key={link.name}
                                to={`/${link.href}`}
                                className="py-3 text-lg font-medium text-white transition hover:text-orange-500"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </HashLink>
                        ))}

                        <Link
                            to="/services/forestry-mulching"
                            className="py-3 text-lg font-medium text-white transition hover:text-orange-500"
                            onClick={() => setMobileOpen(false)}
                        >
                            Forestry Mulching
                        </Link>

                        <Link
                            to="/services/septic"
                            className="py-3 text-lg font-medium text-white transition hover:text-orange-500"
                            onClick={() => setMobileOpen(false)}
                        >
                            Septic Systems
                        </Link>

                        <div className="mt-5">
                            <HashLink
                                smooth
                                to="/#contact"
                                onClick={() => setMobileOpen(false)}
                            >
                                <Button>
                                    Free Estimate
                                </Button>
                            </HashLink>
                        </div>

                    </div>

                </div>
            )}
        </header>
    );
}

export default Navbar;