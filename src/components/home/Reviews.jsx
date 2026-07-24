import { Star, ExternalLink } from "lucide-react";

const reviews = [
    {
        name: "Maddie",
        text: "All Out did my driveway. They truly worked with us the whole way through the process and we love it.",
    },
    {
        name: "Jason",
        text: "Super impressed with this company and how my land looks after they cleared it.",
    },
    {
        name: "Paul",
        text: "Our new retaining wall looks amazing.Awesome company!",
    },
];

export default function Reviews() {
    return (
        <section className="bg-[#0f172a] py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-5 py-2 text-sm font-semibold text-orange-400">
                        <Star size={16} fill="currentColor" />
                    </div>

                    <h2 className="mt-5 text-4xl font-black text-white">
                        Trusted by Homeowners Across Northeast Tennessee
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                        We appreciate every customer who trusts All Out Services with their property. If we've worked with you, we'd love to hear about your experience.
                    </p>

                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">

                    {reviews.map((review) => (

                        <div
                            key={review.name}
                            className="rounded-3xl border border-white/10 bg-[#1b1b1b] p-8 transition hover:-translate-y-2 hover:border-orange-500/40"
                        >
                            <div className="mb-6 flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentcolor" />
                                ))}
                            </div>

                            <p className="leading-8 text-gray-300">
                                "{review.text}"
                            </p>

                            <div className="mt-8 font-bold text-white">
                                - {review.name}
                            </div>
                        
                        </div>

                    ))}

                </div>

                <div className="mt-16 text-center">

                    <a
                        href="YOUR_GOOGLE_REVIEW_LINK"
                        targer="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-400"
                    >
                        Leave a Google Review
                        <ExternalLink size={18} />
                    </a>

                </div>

            </div>
        </section>
    );
}