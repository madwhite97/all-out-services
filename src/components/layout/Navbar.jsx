import { useEffect, useState } from "react";
import logo from "../../assets/images/logo-navbar.png";
import Button from "../ui/Button";
import { HashLink } from "react-router-hash-link";

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
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-[#0B0B0B]/95 backdrop-blur-lg shadow-lg"
                : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-6 md:py-6">

                <HashLink smooth to="/#hero" className="flex items-center">
                    <img
                        src={logo}
                        alt="All Out Services"
                        className="h-14 w-auto transition-all duration-300 md:h-24"
                    />
                </HashLink>

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

                    <HashLink smooth to="/#contact">
                        <Button>
                            Free Estimate
                        </Button>
                    </HashLink>

                </nav>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
                >
                    <span className="text-2xl">
                        {mobileOpen ? "X" : "☰"}
                    </span>
                </button>

            </div>

            {mobileOpen && (
                <div className="border-t border-white/10 bg-[#0B0B0B] lg:hidden">
                    
                    <div className="flex flex-col gap-2 px-6 py-8">

                        {links.map((link) => (
                            <HashLink
                                smooth
                                key={link.name}
                                to={`/${link.href}`}
                                className="rounded-xl px-4 py-4 text-lg font-medium text-white transition hover:bg-white/10"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </HashLink>
                        ))}

                        <div className="mt-6">
                            <HashLink smooth to="/#contact">
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