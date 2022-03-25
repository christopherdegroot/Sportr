import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} autoPlay={false} dynamicHeight={true} showIndicators={false} showStatus={false} infiniteLoop>
      {slides.map((slide) => {
        return <Image src={slide.image} key={slide.key} height="auto" width="800px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
