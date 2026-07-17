function Card({
    children, className = "",
}) {
    return (
        <div className={`group rounded-3xl border border-white/10 bg-[#1F2937] transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20 ${className}`}>
            {children}
        </div>
    );
}

export default Card;