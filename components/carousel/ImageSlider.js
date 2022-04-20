import { filter } from "@chakra-ui/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import MapComponent from "./MapComponent";

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = (props) => {
  const { data, sport } = props;

  const filteredData = data.filter((image) => image.key == sport);

  const images = filteredData.map((image) => {
    return (
      <>
        <Image
          loader={imageLoader}
          src={image.image}
          key={image.key}
          width="800px"
          height="500px"
          alt={`${image.sport} image`}
        />
      </>
    );
  });

  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: {
          lat: props.data.filter((sport) => sport.key == props.sport)[0].lat,
          lng: props.data.filter((sport) => sport.key == props.sport)[0].long,
        },
        zoom: 14,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: true, // remove the bottom-right buttons
        draggable: true,
      });
      const marker = new google.maps.Marker({
        position: {
          lat: props.data.filter((sport) => sport.key == props.sport)[0].lat,
          lng: props.data.filter((sport) => sport.key == props.sport)[0].long,
        },
        map: map,
      });
    });
  }, []);

  return (
    <Carousel
      swipeable={false}
      showThumbs={false}
      autoPlay={false}
      dynamicHeight={false}
      showIndicators={false}
      showStatus={false}
      infiniteLoop
    >
      {images}
      <div id="map" ref={googlemap} />
    </Carousel>
  );
};

export default ImageSlider;
