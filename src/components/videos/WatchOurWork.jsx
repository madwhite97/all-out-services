import { useState } from "react";
import { motion } from "framer-motion";

import videos from "../../data/videos";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import VideoCard from "./VideoCard";
import VideoLightbox from "./VideoLightbox";

function WatchOurWork() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openVideo = (index) => {
        setSelectedIndex(index);
    };

    const closeVideo = () => {
        setSelectedIndex(null);
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === videos.length - 1
            ? 0
            : selectedIndex + 1
        );
    };

    const showPrevious = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? videos.length -1
                : selectedIndex -1
        );
    };

    return (
        <section id="videos" className="bg-[#111827] pt-16 pb-20  lg:py-28">

            <Container>

                <SectionHeading
                    eyebrow="See Us In Action"
                    title="Real Projects. Real Results."
                    description = "Watch our crew transform properties throughout Northeast Tennessee."
                />

                <div className="grid gap-8 md:gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                        >
                            <VideoCard
                                video={video}
                                onClick={() => openVideo(index)}
                            />
                        </motion.div>
                    ))}

                </div>

            </Container>

            <VideoLightbox
                videos={videos}
                selectedIndex={selectedIndex}
                closeVideo={closeVideo}
                showNext={showNext}
                showPrevious={showPrevious}
            />

        </section>
    );
}

export default WatchOurWork;