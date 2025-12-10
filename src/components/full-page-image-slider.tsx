
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FullPageImageSlider: React.FC = () => {
    const slides = [
        {
          id: 'slider-1',
          title: "WFX - Wolfronix",
          description: "A multi-layer security foundation that protects your data, access, and operations.",
          imageUrl: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc2NDgwODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          id: 'slider-2',
          title: "Product Ecosystem",
          description: "A suite of integrated tools designed to streamline your workflow and boost productivity.",
          imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTk3NzQzNDd8MA&ixlib-rb-4.1.0&q=80&w=1080",
        },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, slides.length]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);


  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Image Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-start pt-24 md:pt-32">
          <div className="container">
            <div className="max-w-xl">
              <h1
                className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 transition-all duration-600 ${
                  isTransitioning
                    ? 'opacity-0 translate-y-8'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {slides[currentIndex].title}
              </h1>
              <p
                className={`text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 transition-all duration-600 delay-100 ${
                  isTransitioning
                    ? 'opacity-0 translate-y-8'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                {slides[currentIndex].description}
              </p>
              <Button
                size="lg"
                className={`bg-white text-black hover:bg-white/90 transition-all duration-600 delay-200 ${
                  isTransitioning
                    ? 'opacity-0 translate-y-8'
                    : 'opacity-100 translate-y-0'
                }`}
              >
                See More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="pb-8 md:pb-12 container">
          <div className="flex items-center justify-between">
            {/* Slide Counter */}
            <div className="text-white text-sm md:text-base font-medium">
              <span className="text-2xl md:text-3xl">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-white/60">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={prevSlide}
                disabled={isTransitioning}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 text-white disabled:opacity-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={nextSlide}
                disabled={isTransitioning}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 text-white disabled:opacity-50"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }
                }}
                className="group flex-1 h-1 bg-white/20 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    index === currentIndex ? 'w-full' : 'w-0 group-hover:w-full group-hover:bg-white/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageImageSlider;
