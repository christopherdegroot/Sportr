import { filter } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = (props) => {

  const { data, sport } = props

  const filteredData = data.filter(image => image.key == sport)

  const images = filteredData.map( image => {
    return <Image loader={imageLoader} src={image.image} key={image.key} width='800px' height='500px' alt={`${image.sport} image`} />;
  })

  return (
    <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} autoPlay={false} dynamicHeight={false} showIndicators={false} showStatus={false} infiniteLoop>
      {images}
    </Carousel>
  );
};

export default ImageSlider;
