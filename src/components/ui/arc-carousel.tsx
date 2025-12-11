import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArcCarouselProps {
    items: React.ReactNode[];
    initialIndex?: number;
}

const ArcCarousel: React.FC<ArcCarouselProps> = ({ items, initialIndex = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px] overflow-visible">

            {/* Carousel Container */}
            <div
                className="relative w-full max-w-5xl h-full flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <AnimatePresence initial={false}>
                    {items.map((item, index) => {
                        // Determine wrapping offset
                        let offset = (index - activeIndex);
                        if (offset > items.length / 2) offset -= items.length;
                        if (offset < -items.length / 2) offset += items.length;

                        // Limit visible range
                        if (Math.abs(offset) > 2) return null;

                        // Simple Linear 3D Layout
                        const spacing = 160; // Tighter 'Cover Flow' overlap

                        return (
                            <motion.div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="absolute top-1/2 left-1/2 w-64 h-80 cursor-pointer"
                                initial={false}
                                animate={{
                                    x: offset * spacing,
                                    y: Math.abs(offset) * 10,
                                    z: -Math.abs(offset) * 150, // Deeper pushback
                                    rotateY: offset * -25, // Stronger rotation
                                    rotateZ: offset * 2, // Fan tilt
                                    scale: 1 - Math.abs(offset) * 0.1,
                                    opacity: 1 - Math.abs(offset) * 0.2,
                                    zIndex: 100 - Math.abs(offset),
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    marginLeft: -128, // Center 256px width
                                    marginTop: -160,  // Center 320px height
                                }}
                            >
                                {item}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md rounded-full border border-white/20 transition-all text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                aria-label="Previous"
            >
                <ChevronLeft size={32} />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/10 hover:bg-white/20 hover:scale-110 backdrop-blur-md rounded-full border border-white/20 transition-all text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                aria-label="Next"
            >
                <ChevronRight size={32} />
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex
                            ? 'bg-white w-6 shadow-[0_0_10px_white]'
                            : 'bg-white/20 hover:bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArcCarousel;
