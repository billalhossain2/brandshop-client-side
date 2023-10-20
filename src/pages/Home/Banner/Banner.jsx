const bannerData = [
  {
    id: 1,
    title: "Apple MacBook Pro",
    description:
      "The Apple MacBook Pro is a powerful and sleek laptop, perfect for professionals and creatives.",
    image:
      "https://i.ibb.co/8jR2xPT/Apple-introduces-16-inch-Mac-Book-Pro-the-world-s-best-pro-notebook.jpg",
  },
  {
    id: 2,
    title: "Google Pixel Watch",
    description:
      "The Google Pixel Watch is a smart and stylish wearable, offering advanced features for fitness and communication.",
    image: "https://i.ibb.co/yB0GPKn/Google-Pixel-Watch-A765-G.jpg",
  },
  {
    id: 3,
    title: "Intel 540s Series SSD",
    description:
      "The Intel 540s Series SSD delivers fast and reliable storage performance, ideal for speeding up your computer.",
    image: "https://i.ibb.co/tQ4sLnp/Intel-540s-Series-240-GB-SSD.jpg",
  },
  {
    id: 4,
    title: "Microsoft Surface Dock",
    description:
      "The Microsoft Surface Dock is a versatile accessory that expands connectivity and productivity for Surface devices.",
    image: "https://i.ibb.co/SfMdkPX/Microsoft-Surface-Doc.jpg",
  },
  {
    id: 5,
    title: "Samsung Galaxy Phone A04s",
    description:
      "The Samsung Galaxy Phone A04s is a budget-friendly smartphone with a large display and great camera capabilities.",
    image: "https://i.ibb.co/CtRrrmd/Samsung-Galaxy-A04s.jpg",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-32"
    >
      {bannerData?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-20">
              <img
                className="lg:max-w-sm md:max-w-[200px] max-w-[100px] rounded-lg"
                src={item.image}
              />
              <div className="lg:w-[50%] w-full md:h-auto">
                <h1 className="md:text-5xl text-2xl font-bold">{item.title}</h1>
                <p className="py-6">{item.description}</p>
                <button className="bg-[#F5921D] px-5 py-2 rounded-md text-white font-bold">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
