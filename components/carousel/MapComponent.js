import { useEffect, useState, useRef } from "react";
import {Loader} from '@googlemaps/js-api-loader';




export default function MapComponent(props) {


    const googlemap = useRef(null);

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: {lat: props.lat, lng: props.lng},
        zoom: 10,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: true, // remove the bottom-right buttons
        draggable: true
      });
      const marker = new google.maps.Marker({
        position: {lat: props.lat, lng: props.lng},
        map: map,
      });    

    });
    return <div id="map" ref={googlemap} />
  }