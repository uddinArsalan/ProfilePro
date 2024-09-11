import React, { useState, useRef } from "react";
import { HelpCircle, Plus, ArrowLeft, ArrowRight } from "lucide-react";

interface Image {
  src: string;
  alt: string;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([
    {
      src: "https://images.unsplash.com/photo-1711931189505-2ea6ad031b14?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Placeholder image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1532798210189-ca8e366884b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Placeholder image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1676380249087-ba6fc4088575?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Placeholder image 3",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([
        ...images,
        { src: imageUrl, alt: `User uploaded image ${images.length + 1}` },
      ]);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -220 : 220;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#363C43] rounded-3xl p-3 sm:p-6 shadow-2xl w-full max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-8 space-y-3 sm:space-y-0">
      <div className="flex items-center space-x-2 sm:space-x-5">
        <HelpCircle size={18} className="text-gray-500" />
        <h2 className="text-xs sm:text-base font-semibold text-white bg-[#171717] px-3 sm:px-8 py-1.5 sm:py-3 rounded-lg">
          Gallery
        </h2>
      </div>
      <div className="flex items-center justify-between w-full sm:w-auto space-x-2 sm:space-x-5">
        <label className="flex items-center bg-[#3F454C] text-gray-300 px-2 sm:px-5 py-1.5 sm:py-3 rounded-full cursor-pointer hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-900">
          <Plus className="mr-1 sm:mr-2" size={14} />
          <span className="text-xs font-extrabold">ADD IMAGE</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="hidden"
          />
        </label>
        <div className="flex space-x-2 sm:space-x-3">
          <button
            onClick={() => scroll("left")}
            className="p-1.5 sm:p-3 bg-[#1C1E20] rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg shadow-gray-900 active:bg-[#8eb3dd] focus:outline-none focus:ring-2 focus:ring-[#7B9ABE]"
          >
            <ArrowLeft size={16} className="text-gray-400 hover:text-[#1C1E20]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 sm:p-3 bg-[#1C1E20] rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg shadow-gray-950 active:bg-[#7B9ABE] focus:outline-none focus:ring-2 focus:ring-[#7B9ABE]"
          >
            <ArrowRight size={16} className="text-gray-400 hover:text-[#1C1E20]" />
          </button>
        </div>
      </div>
    </div>
  
    <div
      ref={scrollRef}
      className="flex gap-2 sm:gap-4 w-full overflow-x-auto pt-2 pb-2 sm:pt-3 sm:pb-3 scrollbar-hide"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:-rotate-2 z-20"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover grayscale hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ImageGallery;
