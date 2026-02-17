import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Rohit Sharma",
    rating: 5,
    text: "Cake was insanely good. Fresh, soft, and delivered on time. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    rating: 4,
    text: "Design was exactly like the reference image. Taste could be slightly better ",
  },
  {
    name: "Aman Gupta",
    rating: 5,
    text: "Best bakery experience I've had. Ordering again for sure.",
  },
  {
    name: "Sneha Verma",
    rating: 5,
    text: "Guests kept asking where the cake was from. That says everything.",
  },
];

export default function ReviewSlider() {
  return (
    <section
      className="py-16 bg-gray-50"
      style={{
        background:
          "linear-gradient(135deg, rgb(249, 242, 220), rgb(250, 242, 235), rgb(252, 217, 223))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={800} // smoother animation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // VERY important for UX
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex flex-row">
              <div className="bg-white  p-6 rounded-2xl shadow-sm h-full">
                {/* Stars */}
                <div className="mb-3 text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                <p className="text-gray-600 mb-4">"{review.text}"</p>

                <p className="font-semibold">— {review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
