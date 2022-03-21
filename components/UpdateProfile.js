import Link from "next/link";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
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
  Img,
  Image
} from "@chakra-ui/react";
import Sportcheckbox from "./Sportcheckbox";
import RangeSlider from "./RangeSlider";
import { useState } from "react";

const Details = (props) => {
  const {id, email, name, passsword, bio, profile_image_url, gender, birthdate, sports, km_range} = props.user
  const { isOpen, onToggle } = useDisclosure();

  

  return (
    <Container maxW="container.md">
      <VStack w="full" h="full" p={5} spacing={10} bg="gray.50">

        <VStack spacing={5} align="center">
          <Heading size="2xl"> Edit Profile </Heading>
          <Image  borderRadius='full'
                boxSize='200px'
                src={profile_image_url}
                alt={name}
                fit='cover'
                justifySelf='center'
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
            <RangeSlider defaultValue={km_range} /> {/* onChangeEnd={} */}
          </GridItem>
          <br></br>
          {/* Confirm (Would like replace with saving as you change it) */}
          <GridItem>
            <Link href="/profile">
              <Button colorScheme="blue" w="full" size="lg">
                Confirm
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>

      </VStack>
    </Container>
  );
};

export default Details;
