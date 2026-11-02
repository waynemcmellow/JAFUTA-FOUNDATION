import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Edward Mazunga",
    message:
      "Your commitment to my education and studies has well and truly transformed my life. I am able to pursue my studies and focus on my future as a lawyer without the burden of financial worries and I am immensely grateful for the opportunities you have created.",
  },
  {
    name: "Muzi",
    message:
      "Through access to the internet and Career Guidance program I was introduced to electrics. I knew what I wanted to be then and I am now reaching my dreams thanks to the mentorship and support through Jafuta Foundation.",
  },
  {
    name: "Mildred M",
    message:
      "From the village to becoming a qualified Software Engineer—something I never imagined before Jafuta Foundation.",
  },
  {
    name: "Teen Ndimakule",
    message:
      "l never thought l would use a computer, until l joined Education and Technology Center.",
  },
  {
    name: "Community Member",
    message:
      "My daughters and l never walk long distance for water thanks to the solar-powered well nearby.",
  },
];

export default function CommunityVoices() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index];

    if (!carousel || !slide) {
      return;
    }

    const left =
      slide.getBoundingClientRect().left -
      carousel.getBoundingClientRect().left +
      carousel.scrollLeft;

    carousel.scrollTo({ left, behavior: "auto" });
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    scrollToSlide(nextIndex);
  };

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(previousIndex);
    scrollToSlide(previousIndex);
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const slides = Array.from(carousel.children);
    const firstVisibleSlide = slides.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(
          slide.getBoundingClientRect().left -
            carousel.getBoundingClientRect().left,
        );
        return distance < closest.distance
          ? { distance, index }
          : closest;
      },
      { distance: Infinity, index: 0 },
    );

    setCurrentIndex(firstVisibleSlide.index % testimonials.length);
  };

  return (
    <section
      aria-label="Community voices"
      aria-roledescription="carousel"
      className="w-full bg-white py-10"
    >
      <div className="px-5 pb-14">
        <h2 className="text-3xl font-normal text-[#292929] md:text-4xl">
          Community Voices
        </h2>
      </div>

      <div className="relative  px-5">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          aria-live="polite"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto md:gap-10"
        >
          {[...testimonials, ...testimonials.slice(0, 2)].map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              aria-roledescription="slide"
              aria-hidden={index >= testimonials.length ? "true" : undefined}
              className="min-h-[300px] w-full shrink-0 snap-start bg-[#eee5da] px-7 py-10 md:w-[calc((100%_-_5rem)/3)] md:px-10"
            >
              <h3 className="mb-2 text-xl font-medium text-[#292929] md:text-2xl">
                {item.name}
              </h3>

              <p className="text-base italic leading-[1.8] text-[#333333]">
                “{item.message}”
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonials"
          className="absolute left-5 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#70a8a9] text-white shadow-md transition hover:bg-[#4d8e90] focus:outline-none focus:ring-2 focus:ring-[#4d8e90]"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m11 6-6 6 6 6" />
          </svg>
        </button>
        
 


        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonials"
          className="absolute right-5 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#70a8a9] text-white shadow-md transition hover:bg-[#4d8e90] focus:outline-none focus:ring-2 focus:ring-[#4d8e90]"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
