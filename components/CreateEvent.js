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
  Stack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import Sportcheckbox from "./Sportcheckbox";
import { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { icons } from "react-icons";
import { FcInfo } from "react-icons/fc";
import script from "next/script";
import { BsGoogle } from "react-icons/bs";
import {Loader} from '@googlemaps/js-api-loader';



const Details = (props) => {
  const { state, createEvent } = props;

  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);
  const toast = useToast();

  const [titleValue, setTitleValue] = useState("");
  const [eventDateValue, setEventDateValue] = useState(new Date());
  const [sportValue, setSportValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [sameGenderValue, setSameGenderValue] = useState(false);
  const [similarAgeValue, setSimilarAgeValue] = useState(false);

  // Planning for when we add the form components for these
  const [capacityLimitValue, setCapacityLimitValue] = useState(10);
  const [longitudeValue, setLongitudeValue] = useState(" 49.273094");
  const [latitudeValue, setLatitudeValue] = useState(" -122.63733");

  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: {lat: 49.249, lng: -123.111},
        zoom: 10,
      });
      // const marker = new google.maps.Marker({
      //   position: {lat: 49.249, lng: -123.111},
      //   map: map,
      // });    
      google.maps.event.addListener(map, "click", (event) => {
         
       const newMarker = new google.maps.Marker({
          position: event.latLng,
          map: map,
          latlong: JSON.stringify(event.latLng.toJSON(), null, 2)
        });    
        console.log(newMarker.latlong)
        return newMarker
      });
    });
  }, []);

  
  return (
    <> 
      <Container pb={20} maxW="container.md">
        <VStack w="full" h="full" p={10} spacing={10}>
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl"> Create Event </Heading>
          </VStack>
          <SimpleGrid columns={2} rowGap={6} w="full">
            <GridItem colSpan={2}>
              {/* Event Name Input */}
              <FormControl>
                <FormLabel>Event Name </FormLabel>
                <Input
                  placeholder="Event Title"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                />
              </FormControl>
              {/* Date Input */}
              <GridItem mt="6" colSpan={2}>
                <FormLabel>Date</FormLabel>
                <DatePicker
                  className={"date-time-text"}
                  showTimeSelect
                  dateFormat="Pp"
                  selected={eventDateValue}
                  onChange={(date) => setEventDateValue(date)}
                />
              </GridItem>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>What sport would you like to play?</FormLabel>
                {/* Select the sport */}
                <Select
                  placeholder="Select Sport"
                  value={sportValue}
                  onChange={(e) => setSportValue(e.target.value)}
                >
                  <option value="badminton">Badminton</option>
                  <option value="baseball">Baseball</option>
                  <option value="basketball">Basketball</option>
                  <option value="beachvolleyball">Beach Volleyball</option>
                  <option value="DiscGolf">Disc Golf</option>
                  <option value="canoeingkayaking">Canoeing/Kayaking</option>
                  <option value="curling">Curling</option>
                  <option value="cycling">Cycling</option>
                  <option value="football">Football</option>
                  <option value="golf">Golf</option>
                  <option value="hiking">Hiking</option>
                  <option value="iceclimbing">Ice Climbing</option>
                  <option value="lacrosse">Lacrosse</option>
                  <option value="pickleball">Pickleball</option>
                  <option value="racquetball">Racquetball</option>
                  <option value="rockclimbing">Rock Climbing</option>
                  <option value="rowing">Rowing</option>
                  <option value="rugby">Rugby</option>
                  <option value="running">Running</option>
                  <option value="sailing">Sailing</option>
                  <option value="skiing">Skiing</option>
                  <option value="soccer">Soccer</option>
                  <option value="spikeball">Spike Ball</option>
                  <option value="squash">Squash</option>
                  <option value="swimming">Swimming</option>
                  <option value="tabletennis">Table Tennis</option>
                  <option value="tennis">Tennis</option>
                  <option value="trailrunning">Trail Running</option>
                  <option value="ultimatefrisbee">Ultimate Frisbee</option>
                  <option value="volleyball">Volleyball</option>
                  <option value="yoga">Yoga</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>How many players are you looking for?</FormLabel>
                <Input
                  placeholder="Number of players"
                  type="number"
                  onChange={(e) => setCapacityLimitValue(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormLabel>Location</FormLabel>
              <Box w={'100%'} h="300px">
            <div id="map" ref={googlemap} />
            </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                {/* Set Event Description */}
                <FormLabel>Event Description</FormLabel>
                <Textarea
                  resize="none"
                  h="7em"
                  placeholder="Description"
                  value={descriptionValue}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <HStack>
                <Text pb="3" fontSize={"lg"}>
                  Any Preferences?
                </Text>
                <IconButton
                  justifyContent={"flex-start"}
                  icon={<FcInfo size="20" />}
                  variant="unstyled"
                  pb="5"
                  onClick={onOpen}
                  outline="none"
                ></IconButton>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent w="90%">
                    <ModalHeader>Preferences</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>
                        Please be considerate when choosing these options. We
                        decided to include these options NOT to targetedly
                        exclude any gender or age groups, but to allow the
                        option to choose should it be preferred for your event
                        where needed. Please consider leaving these preferences
                        open to include all people whenever appropriate.
                      </Text>
                      <br></br>
                      <Text>
                        Depending on your selection, your event will only be
                        shown to others in the community who are also your
                        gender, or within your age group.
                      </Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme={"teal"} onClick={onClose}>
                        I Understand
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </HStack>
              <Stack spacing={5} direction="row">
                {/* Set Same Gender Preference */}
                <Checkbox
                  isChecked={sameGenderValue}
                  onChange={
                    sameGenderValue
                      ? () => setSameGenderValue(false)
                      : () => setSameGenderValue(true)
                  }
                >
                  Same gender
                </Checkbox>
                {/* Set Similar Age Preference */}
                <Checkbox
                  isChecked={similarAgeValue}
                  onChange={
                    similarAgeValue
                      ? () => setSimilarAgeValue(false)
                      : () => setSimilarAgeValue(true)
                  }
                >
                  Same age group
                </Checkbox>
              </Stack>
            </GridItem>
            <GridItem colSpan={2}>
              <Link href="/eventfeed" passHref>
                <Button
                  colorScheme="teal"
                  w="full"
                  size="lg"
                  onClick={() => {
                    createEvent(1, {
                      user_owner: "1", // SET AS LOGGED IN USER ID
                      datetime: eventDateValue,
                      title: titleValue,
                      description: descriptionValue,
                      sport: sportValue,
                      same_gender: sameGenderValue,
                      similar_age: similarAgeValue,
                      capacity_limit: capacityLimitValue,
                      latitude: latitudeValue,
                      longitude: longitudeValue,
                    });
                    toast({
                      title: "Event created.",
                      description: "Your event is now visible to the community",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                    });
                  }}
                >
                  Create Event
                </Button>
              </Link>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
};

export default Details;
