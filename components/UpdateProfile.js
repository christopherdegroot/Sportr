import Link from "next/link";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Container,
  useDisclosure,
  Collapse,
  Box,
  ExpandingTextarea,
  Textarea,
  Checkbox,
  Button,
  Select,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Img
} from "@chakra-ui/react";
import Sportcheckbox from "./Sportcheckbox";
import { useState } from "react";

const Details = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <Container maxW="container.md">
      <VStack w="full" h="full" p={10} spacing={10} bg="gray.50">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl"> Edit Info </Heading>
          <Img  borderRadius='full'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                />
        </VStack>
      </VStack>
    </Container>
  );
};

export default Details;
