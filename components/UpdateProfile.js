import Link from "next/link";
import {
  range,
  rangeTrack,
  rangeFilledTrack,
  rangeThumb,
  rangeMark,
  Container,
  useDisclosure,
  Collapse,
  Box,
  ExpandingTextarea,
  Textarea,
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
  Image,
  Center,
  CheckboxGroup,
  Checkbox,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Sportcheckbox from "./Sportcheckbox";
import Sliderrange from "./RangeSlider";
import useApplicationData from "../hooks/useApplicationData";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useEffect } from "react";

const Details = (props) => {
  const [bioValue, setBioValue] = props.bio;
  const [rangeValue, setRangeValue] = props.range;
  const [sportsValue, setSportsValue] = props.sports;
  const [checkedValue, setCheckedValue] = props.checked;
  const updateUser = props.updateUser;

  console.log('logging props', props)

  const flickSport = (events) => {
    setCheckedValue(events);
    events.forEach((event) => {
      setSportsValue({
        ...sportsValue,
        [event]: sportsValue[event] ? false : true,
      });
    });
    // console.log('LOGGING SPORTS VALUE',sportsValue)
  };

  useEffect(() => {
    setCheckedValue(
      sportsValue
        ? Object.keys(sportsValue).filter((sport) => sportsValue[sport])
        : []
    );
  }, [sportsValue]);
  // console.log('THESE SPORTS SHOULD BE CHECKED', checkedValue)

  const listOfSports = [
    "badminton",
    "baseball",
    "basketball",
    "beach volleyball",
    "disc golf",
    "canoeing / kayaking",
    "curling",
    "cycling",
    "football",
    "golf",
    "hiking",
    "ice climbing",
    "lacrosse",
    "pickleball",
    "racquetball",
    "rock climbing",
    "rowing",
    "rugby",
    "running",
    "sailing",
    "skiing",
    "soccer",
    "spikeball",
    "squash",
    "swimming",
    "table tennis",
    "tennis",
    "trail running",
    "ultimate frisbee",
    "volleyball",
    "yoga",
  ];

  const updatedUser = {
    bio: bioValue,
    birth_date: props.user ? props.user.birth_date : "",
    email: props.user ? props.user.email : "",
    gender: props.user ? props.user.gender : "",
    id: props.user_id, // ID
    km_range: rangeValue,
    name: props.user ? props.user.name : "",
    password: props.user ? props.user.password : "",
    profile_image_url: props.user ? props.user.profile_image_url : "",
    same_gender_preference: false,
    similar_age_preference: false,
    sports: sportsValue,
  };

  return (
    <Container maxW="container.md">
      <VStack w="full" h="full" p={2} spacing={10}>
        <SimpleGrid columns={1} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <Button variant={"outline"} colorScheme={"teal"} w={"full"}>
              Update Profile Photo
            </Button>
          </GridItem>
          {/* About Me */}
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>About Me</FormLabel>
              <Textarea
                resize="none"
                h="7em"
                placeholder="Bio"
                value={bioValue}
                onChange={(e) => setBioValue(e.target.value)}
              />
            </FormControl>
          </GridItem>
          {/* Range */}
          <GridItem colSpan={2}>
            <FormLabel pb={4}>Update Range</FormLabel>
            <VStack>
              <Slider
                w="90%"
                aria-label="range-ex-6"
                onChange={(e) => setRangeValue(e)}
                value={rangeValue}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="teal.500" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="teal" borderColor="teal">
                    {rangeValue}
                  </Box>
                </SliderThumb>
              </Slider>
            </VStack>
          </GridItem>
          {/* Sports */}
          <GridItem colSpan={2}>
            {/* checkbox component has an on user changed event that we can use to reflect on the users choice */}
            <FormLabel>Sports</FormLabel>

            <VStack alignItems="flex-start">
              <CheckboxGroup
                colSpan={2}
                defaultValue={props.newCheckBoxValues}
                onChange={(val) => flickSport(val)}
              >
                <SimpleGrid columns={1} rowGap={3} w="full">
                  {sportsValue
                    ? listOfSports.map((sport) => (
                        <Checkbox key={sport} value={sport}>
                          {sport
                            ? `${sport.split("")[0].toUpperCase()}${sport
                                .split("")
                                .slice(1)
                                .join("")}`
                            : ""}
                        </Checkbox>
                      ))
                    : ""}
                </SimpleGrid>
              </CheckboxGroup>
            </VStack>
          </GridItem>
          {/* Confirm (Would like replace with saving as you change it) */}
          <GridItem colSpan={2}>
            <Button
              justifyContent={"center"}
              w={300}
              onClick={() => {
                updateUser(Number(props.user_id), updatedUser)
                props.onToggle();
              }}
              colorScheme="teal"
              variant={"solid"}
            >
              Confirm
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Details;
