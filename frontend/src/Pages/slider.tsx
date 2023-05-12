import React from "react";
import Slider from "react-slick"

type Card = {
  imageUrl: string;
};

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function AutomaticCarousel({ cards }: { cards: Card[] }) {
  const sliderRef = React.useRef<Slider>(null);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

<Slider {...settings} ref={sliderRef}>
  {cards.map((card, index) => (
    <div key={index}>
      <img
        src={card.imageUrl}
        className="w-full h-96 md:w-120 lg:w-140 xl:w-160 m-auto object-cover"
        alt={`Slide ${index + 1}`}
      />
    </div>
  ))}
</Slider>



    </div>
  );
}
