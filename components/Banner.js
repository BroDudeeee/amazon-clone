/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute z-20 h-28 w-full bottom-0 bg-gradient-to-b from-transparent to-gray-100"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img
            src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            loading="lazy"
            className="h-56 bg-contain md:h-96"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            loading="lazy"
            className="h-56 bg-contain md:h-96"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            loading="lazy"
            className="h-56 bg-contain md:h-96"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
            loading="lazy"
            alt="image"
            className="h-56 bg-contain md:h-96"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
