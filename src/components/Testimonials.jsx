import React, { useRef } from "react";
// import "remixicon/fonts/remixicon.css";

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The food was absolutely delicious! The AI assistant made ordering super easy and quick.",
  },
  {
    id: 2,
    name: "Aman Verma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing website! Clean UI, smooth performance, and great AI-based suggestions.",
  },
  {
    id: 3,
    name: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "The ordering process was fast and fun. My food arrived hot and fresh. Loved it!",
  },
  {
    id: 4,
    name: "Rohit Kumar",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    review:
      "This website feels premium! The AI chatbot and smooth navigation are amazing.",
  },
  {
    id: 5,
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    review:
      "Beautiful design and super helpful chatbot. The food recommendation was perfect!",
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="relative bg-gradient-to-br py-14 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-10">
        What Our Customers Say 🍴
      </h2>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-200 transition"
      >
        <i className="ri-arrow-left-s-line text-orange-600 text-2xl"></i>
      </button>

      {/* Scrollable Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="w-[50%] md:min-w-[340px] h-[430px] md:h-[340px] bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between items-center text-center flex-shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-30 h-30 rounded-full object-cover border-4 border-orange-400 shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            </div>

            <p className="text-gray-600 italic text-sm leading-relaxed px-2">
              “{t.review}”
            </p>

            <div className="mt-4 text-orange-500 text-xl">★★★★★</div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-orange-200 transition"
      >
        <i className="ri-arrow-right-s-line text-orange-600 text-2xl"></i>
      </button>
    </div>
  );
};

export default TestimonialSection;
