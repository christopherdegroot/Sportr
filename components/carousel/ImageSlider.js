import { filter } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState, useRef } from "react";
import {Loader} from '@googlemaps/js-api-loader';

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

  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyD1t86TICVLA6EdBxwgbiBMVFefoW6UMYM',
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: {lat: 49.249, lng: -123.111},
        zoom: 10,
      });
      const marker = new google.maps.Marker({
        position: {lat: 49.249, lng: -123.111},
        map: map,
      });    
    });
  }, []);


  return (
    <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} autoPlay={false} dynamicHeight={false} showIndicators={false} showStatus={false} infiniteLoop>
      {images}
      <div id="map" ref={googlemap} />
    </Carousel>
  );
};

export default ImageSlider;
