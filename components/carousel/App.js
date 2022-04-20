import "../../styles/globals.css";
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

export default function ImageSliderCustom() {
  return (
    <Box w="100%" p={0} m={0} color="white">
      <ImageSlider key={SlideData.key} slides={SlideData} />
    </Box>
  );
}
