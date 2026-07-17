import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import gallery from "../data/gallery";

function Gallery() {
    const photos = gallery;
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openImage = (index) => setSelectedIndex(index);

    const closeImage = () => setSelectedIndex(null);

    const showNext = () => {
        setSelectedIndex((prev) => (prev + 1) % photos.length);
    };

    const showPrevious = () => {
        setSelectedIndex((prev) =>
        prev === 0 ? photos.length -1 : prev - 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedIndex === null) return;

            if (event.key === "Escape") {
                closeImage();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
            }
        };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
}, [selectedIndex]);

    useEffect(() => {
        document.body.style.overflow =
            selectedIndex !== null ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex]);

    return (
        <>
            <Navbar />
            
            <main className="min-h-screen bg-[#111827] pt-32 pb-24">
                
                <div className="mx-auto max-w-7xl px-6">
                    
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-500">
                        Our Work
                    </p>
                    
                    <h1 className="mt-4 text-5xl font-black text-white">
                        Built to Last.
                    </h1>
                    
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                        Every job reflects the pride and craftsmanship that define All Out Services.
                    </p>
                    
                    <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
                        {photos.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => openImage(index)}
                                className="mb-6 break-inside-avoid cursor-pointer  overflow-hidden rounded-3xl"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full cursor-pointer rounded-3xl transition duration-500 hover:scale-105"
                                />
                            </div>
                        ))}

                    </div>
                    
                </div>

                {selectedIndex !== null && (
                    <div
                        onClick={closeImage}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
                    >

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrevious();
                            }}
                            className="absolute left-6 flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-3xl text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-orange-500"
                        >
                                ❮
                        </button>

                            <img
                                src={photos[selectedIndex].image}
                                alt=""
                                onClick={(e) => e.stopPropagation()}
                                className="max-h-[92vh] max-w-[92vw] rounded-2xl shadow-2xl transition-all duration-300 animate-[fadeIn_.25s_ease]"
                            />

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNext();
                                }}
                                className="absolute right-6 flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-3xl text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-orange-500"
                            >
                                ❯
                            </button>

                            <button
                                onClick={closeImage}
                                className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-3xl text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-orange-500"
                            >
                                ×
                            </button>
                    </div>
                )}
                
            </main>
            
            <Footer />
        </>
    );
}

export default Gallery;