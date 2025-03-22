import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import Modal from "./Modal";
import MuiModal from "./Modal";

const PropertyModal = ({ open, onClose, property }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  if (!property) return null;

  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  return (
    <MuiModal open={open} onClose={onClose} title={property.name}>
      <div className="relative h-full">
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {property.images.map((img, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[80vh] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
            >
              &#8592;
            </button>
            <button
              onClick={goNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
            >
              &#8594;
            </button>
            <div className="absolute bottom-2 right-1/2 translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {currentSlide + 1} / {property.images.length}
            </div>
          </>
        )}
      </div>
    </MuiModal>
  );
};

export default PropertyModal;
