"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "These tutorials made everything so easy to understand. I finally learned how to create clean fades without overthinking the process.",
    name: "James Bond",
    title: "Customer",
    image: "/testimonials/james-bond.jpg",
  },
  {
    id: 2,
    text: "I use these lessons to train new barbers in my shop. The content is practical, clear, and perfect for fast learning.",
    name: "James Bond",
    title: "Customer",
    image: "/testimonials/james-bond-2.jpg",
  },
  {
    id: 3,
    text: "The step-by-step approach helped me master advanced techniques. Highly recommended for anyone serious about barbering.",
    name: "James Bond",
    title: "Customer",
    image: "/testimonials/james-bond-3.jpg",
  },
  {
    id: 4,
    text: "Best investment I've made in my career. The instructors are top-notch and the content is always up-to-date.",
    name: "James Bond",
    title: "Customer",
    image: "/testimonials/james-bond-4.jpg",
  },
  {
    id: 5,
    text: "From beginner to professional, this platform has everything you need. The community support is amazing too.",
    name: "James Bond",
    title: "Customer",
    image: "/testimonials/james-bond-5.jpg",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerPage = 2;

  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Testimonials
            </h2>
            <div className="w-8 h-0.5 bg-orange-500"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories From Our Learners
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Barbers share their experience and the results they achieved through
            our training.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative mb-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 rounded-lg p-6 shadow-xl"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-lg leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gray-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-orange-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

