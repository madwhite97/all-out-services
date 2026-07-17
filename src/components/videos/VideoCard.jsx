import { Play } from "lucide-react";

function VideoCard({ video, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
        >
            <img
                src={video.thumbnail}
                alt=""
                className="aspect-[9/16] w-full object object-cover transition-all duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative">

                    <span className="absolute inset-0 rounded-full bg-orange-500 opacity-30 animate-ping"></span>

                    <div
                        className="
                            relative
                            flex h-20 w-20 items-center justify-center
                            rounded-full
                            bg-orange-500
                            shadow-2xl
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:shadow-orange-500/60
                        "
                    >
                        <Play
                            size={42}
                            fill="white"
                            color="white"
                            className="ml-1 transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default VideoCard;