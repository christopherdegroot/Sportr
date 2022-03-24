import { Box, VStack } from "@chakra-ui/react";
import ImageSlider from '../../components/carousel/ImageSlider'
import { SlideData } from '../../components/carousel/SlideData'

export default function App() {
  return (
    <VStack w="fit-content" p={4} color="white">
      <ImageSlider slides={SlideData} />
    </VStack>
  );
}
