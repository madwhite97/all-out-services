import { motion } from "framer-motion";

const photos = [
    {
        src: "/images/forestry/forestry-1.jpg",
        alt: "CAT Forestry Mulcher",
    },
];

const videos = [
    "forestry-2.mp4",
    "forestry-3.mp4",
    "forestry-5.mp4",
    "forestry-6.mp4",
    "forestry-7.mp4",
    "forestry-8.mp4",
    "forestry-9.mp4",
    "forestry-10.mp4",
    "forestry-11.mp4",
    "forestry-12.mp4",
];

function MediaGallery() {
    return (
        <>
        
            {/* Photos */}
            
            <section className="bg-[#0B0B0B] py-24">
                <div className="mx-auto max-w-7xl px-6">
                    
                    <div className="text-center">
                        
                        <span className="font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Recent Projects
                        </span>
                        
                        <h2 className="mt-4 text-4xl font-bold text-white">
                            Forestry Mulching In Action
                        </h2>
                        
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
                            See how professional forestry mulching transforms overgrown land into clean, usable property.
                        </p>
                        
                    </div>

                    <div className="mt-16 grid gap-8">

                        {photos.map((photo) => (

                                <motion.div
                                    key={photo.src}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: .3 }}
                                    className="overflow-hidden rounded-3xl border border-white/10"
                                >
                                    
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="h-[650px] w-full object.cover"
                                    />

                                </motion.div>

                        ))}

                    </div>

                </div>
            </section>
            
            {/* Videos */}
            
            <section className="bg-[#0F172A] py-24">
                
                <div className="mx-auto max-w-7xl px-6">
                    
                    <div className="text-center">
                        
                        <span className="font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Equipment In Action
                        </span>
                        
                        <h2 className="mt-4 text-4xl font-bold text-white">
                            Watch Our Forestry Mulcher At Work
                        </h2>
                        
                    </div>
                    
                    <div className="mt-16 grid gap-8 lg:grid-cols-2">
                        
                        {videos.map((video) => (
                            
                                <motion.div
                                    key={video}
                                    whileHover={{ y: -6 }}
                                    className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]"
                                >

                                    <video
                                        controls
                                        preload="metadata"
                                        className="w-full"
                                    >

                                        <source
                                            src={`/videos/forestry/${video}`}
                                            type="video/mp4"
                                        />
                                    </video>

                                </motion.div>
                            
                        ))}
                        
                    </div>
                
                </div>
                
            </section>
        </>
    );
}

export default MediaGallery;