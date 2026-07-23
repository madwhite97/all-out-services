function SectionHeading({
    eyebrow,
    title,
    description,
    titleClassName = "",
}) {
    return (
        <div className="mx-auto mb-10 max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
                {eyebrow}
            </p>

            <h2 className={`mt-6 text-4xl font-black text-white md:text-5xl ${titleClassName}`}>
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-gray-400">
                    {description}
                </p>
            )}

        </div>
    );
}

export default SectionHeading;