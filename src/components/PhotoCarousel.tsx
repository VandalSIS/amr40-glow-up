import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import iuliapopascaun from "@/assets/iuliapopascaun.jpg";
import mancare2 from "@/assets/mancare2.jpg";
import sala from "@/assets/sala.jpg";
import mancare3 from "@/assets/mancare3.jpg";

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: iuliapopascaun, alt: "Iulia Popa" },
    { src: mancare2, alt: "Mâncare sănătoasă" },
    { src: sala, alt: "Sala de antrenament" },
    { src: mancare3, alt: "Nutriție echilibrată" },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Carousel Container */}
          <div className="relative group">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-auto max-h-[60vh] object-contain transition-opacity duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Mergi la imaginea ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Preview */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-primary shadow-lg scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;

