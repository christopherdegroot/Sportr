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

const Details = (props) => {
  const {id, email, name, passsword, bio, profile_image_url, gender, birthdate, sports, km_range} = props.user
  const { isOpen, onToggle } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(km_range)
  

  return (
    <Container maxW="container.md">
      <VStack w="full" h="full" p={10} spacing={10} bg="gray.50">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl"> Edit Info </Heading>
          <Img  borderRadius='full'
                boxSize='150px'
                src={profile_image_url}
                alt={name}
                fit='none'
                />
        </VStack>
        <SimpleGrid columns={1} rowGap={6} w="full">
          {/* About Me */}
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>About Me</FormLabel>
              <Textarea resize="none" h="7em" placeholder="Bio" />
            </FormControl>
          </GridItem>
          {/* Name */}
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder={name} />
            </FormControl>
          </GridItem>
          {/* Email */}
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder={email} />
            </FormControl>
          </GridItem>
          {/* Sports */}
          <GridItem colSpan={2}>
            {/* checkbox component has an on user changed event that we can use to reflect on the users choice */}
            <Button onClick={onToggle}>
              What sports are you interested in?
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                <Sportcheckbox></Sportcheckbox>
              </Box>
            </Collapse>
          </GridItem>
          {/* Range */}
          <GridItem>
            <FormLabel>Select Range</FormLabel>

            <Slider aria-label='slider-ex-6' defaultValue={sliderValue} onChange={(val) => setSliderValue(val)} onChangeEnd={(val) => console.log('Update KM Range')} >
              <SliderMark value={25} mt='2' ml='-2.5' fontSize='sm'>
                25km
              </SliderMark>
              <SliderMark value={50} mt='2' ml='-2.5' fontSize='sm'>
                50km
              </SliderMark>
              <SliderMark value={75} mt='2' ml='-2.5' fontSize='sm'>
                75km
              </SliderMark>

              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                {sliderValue}
              </SliderThumb>

            </Slider>

          </GridItem>
          <br></br>
          {/* Confirm (Would like replace with saving as you change it) */}
          <GridItem>
            <Link href="/profile">
              <Button colorScheme="blue" w="full" size="lg">
                Sign up
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Details;
