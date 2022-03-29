import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} autoPlay={false} dynamicHeight={true} showIndicators={false} showStatus={false} infiniteLoop>
      {slides.map((slide) => {
        return <Image loader={imageLoader} src={slide.image} key={slide.key} height="400px" width="650px" alt={`${slide.sport} image`} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
