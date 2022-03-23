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
  CheckboxGroup,
  Grid,
  Stack
} from "@chakra-ui/react";
import Sportcheckbox from "./Sportcheckbox";
import { useState } from "react";

const Details = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <Container maxW="container.md">
      <VStack w="full" h="full" p={10} spacing={10} >
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl"> Please Register </Heading>
          <Text>
            {" "}
            If you already have an account, click <Link href="/">here</Link> to
            log in{" "}
          </Text>
        </VStack>
        <SimpleGrid columns={2} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>First Name </FormLabel>
              <Input placeholder="First Name" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Last Name </FormLabel>
              <Input placeholder="Last Name" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email </FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Password </FormLabel>
              <Input type="password" placeholder="Password"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Confirm Password </FormLabel>
              <Input type="password" placeholder="Password"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Tell Us About Yourself </FormLabel>
              <Textarea resize="none" h="7em" placeholder="Bio"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
          <FormControl>
              <FormLabel>What is your age?</FormLabel>
              <Input type="number" placeholder="Age"/>

            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
          <FormControl>
              <FormLabel>What is your gender?</FormLabel>
              <Select placeholder="Gender">
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='male'>Other</option>
              </Select>
            </FormControl>
          </GridItem>
          
          <GridItem colSpan={2}>
            {/* checkbox component has an on user changed event that we can use to reflect on the users choice */}
            <Button onClick={onToggle}>
              What sports are you interested in?
            </Button>
            <Collapse colSpan={2} in={isOpen} animateOpacity>
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
          <GridItem colSpan={2}>
          </GridItem>
          <GridItem colSpan={2}>
            <FormLabel pb={4} >Select Range</FormLabel>
            <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
              <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                25km
              </SliderMark>
              <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                50km
              </SliderMark>
              <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                75km
              </SliderMark>
              <SliderMark
                value={sliderValue}
                textAlign='center'
                bg='blue.500'
                color='white'
                mt='-10'
                ml='-5'
                w='14'
              >
                {sliderValue}km
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </GridItem>
          <GridItem></GridItem>
          <GridItem colSpan={2}>
            <Text pb='3' fontSize={'lg'}>Any Preferences?</Text>
          <Stack spacing={5} direction='row'>
            <Checkbox>Events with my gender</Checkbox>
            <Checkbox>Events with my age group</Checkbox>
          </Stack>
          </GridItem>
          {props.registerPage && (<GridItem colSpan={2}>
            <Link href="/profile">
              <Button colorScheme="blue" w="full" size="lg">
                Sign up
              </Button>
            </Link>
          </GridItem>)}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Details;
