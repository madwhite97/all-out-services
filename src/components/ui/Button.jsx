function Button({
    children,
    variant = "primary",
    href,
    onClick,
    type = "button",
}) {
    const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

    const variants = {
        primary: 
            "bg-orange-500 text-white hover:bg-orange-600 hover:translate-y-1 hover:shadow-lg hover: shadow-orange-500/30",

        secondary:
            "border border-white text-white hover:-bg-white hover:text-black hover:-translate-y-1",
        
        dark:
            "bg-[#1F2937] text-white hover:bg-[#374151]",
    };

    if (href) {
        return (
            <a href={href} className={`${base} ${variants[variant]}`}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button;