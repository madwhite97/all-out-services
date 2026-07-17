import logo from "../../assets/images/logo-full.png";

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#080808]">

            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

                <div>

                    <img
                        src={logo}
                        alt="All Out Services"
                        className="mb-6 h-20 w-auto"
                    />

                    <p className="leading-7 text-gray-400">
                        Professional excavation, concrete, retaining walls, land clearing and site preparation throughout Northeast Tennessee.
                    </p>

                </div>

                <div>

                    <h3 className="mb-6 text-xl font-bold">
                        Quick Links
                    </h3>

                    <ul className="space-y-4 text-gray-400">

                        <li>
                            <a href="#hero" className="hover:text-orange-500">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange-500">
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#about" className="hover:text-orange-500">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#projects" className="hover:text-orange-500">
                                Our Work
                            </a>
                        </li>

                    </ul>

                </div>

                <div>
                    
                    <h3 className="mb-6 text-xl font-bold">
                        Services
                    </h3>

                    <ul className="space-y-4 text-gray-400">

                        <li>Excavation</li>

                        <li>Concrete</li>

                        <li>Retaining Walls</li>

                        <li>Forestry Mulching</li>

                        <li>Land Clearing</li>
                    </ul>

                </div>

                <div>

                    <h3 className="mb-6 text-xl font-bold">
                        Contact
                    </h3>

                    <ul className="space-y-4 text-gray-400">

                        <li>(423) 742-2060</li>

                        <li>allouthardscape@gmail.com</li>

                        <li>Northeast Tennessee</li>

                    </ul>

                </div>

            </div>

            <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
               © {new Date().getFullYear()} All Out Services. All Rights Reserved.
            </div>

        </footer>
    );
}

export default Footer;