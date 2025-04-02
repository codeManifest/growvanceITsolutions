import React, { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      name: "Judith Black",
      role: "CEO of Workcation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“Absolutely amazing service! Their team went above and beyond to help us. Highly recommended.”",
      name: "John Doe",
      role: "Founder of StartFlow",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“One of the best experiences I’ve had. The team is professional and truly cares about their clients.”",
      name: "Alice Brown",
      role: "Marketing Manager at NextGen",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“Highly efficient and excellent quality. I’m beyond happy with the results. Would definitely use again.”",
      name: "Michael Smith",
      role: "CTO of InnoTech",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Hear from our happy customers about their experience with us.
        </p>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center  mt-12">
        {/* <img
          alt="Company Logo"
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9 ">
            <p>{testimonials[currentIndex].quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt={testimonials[currentIndex].name}
              src={testimonials[currentIndex].image}
              className="mx-auto size-12 rounded-full border border-gray-300"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{testimonials[currentIndex].role}</div>
            </div>
          </figcaption>
        </figure>

        {/* Carousel Controls */}
        <div className="mt-8 flex justify-center space-x-6">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            ← Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}