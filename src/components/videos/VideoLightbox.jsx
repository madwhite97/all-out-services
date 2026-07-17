import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function VideoLightbox({
    videos,
    selectedIndex,
    closeVideo,
    showNext,
    showPrevious,
}) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeVideo();
            if (event.key === "ArrowRight") showNext();
            if(event.key === "ArrowLeft") showPrevious();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, closeVideo, showNext, showPrevious]);

    if (selectedIndex === null) return null;

    const video = videos[selectedIndex];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={closeVideo}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    closeVideo();
                }}
                className="absolute right-6 top-6 text-white hover:text-orange-500"
            >
                <X size={34} />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    showPrevious();
                }}
                className="absolute left-6 text-white hover:text-orange-500"
            >
                <ChevronLeft size={42} />
            </button>

            <video
                key={video.id}
                ref={videoRef}
                controls
                autoPlay
                className="max-h-[90vh] max-w-[90vw] rounded-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <source src={video.file} />
            </video>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        showNext();
                    }}
                    className="absolute right-6 text-white hover:text-orange-500"
                >
                    <ChevronRight size={42} />
                </button>
        </div>
    );
}

export default VideoLightbox;