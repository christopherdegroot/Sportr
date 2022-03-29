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
  sliderValue,
  setSliderValue,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Sportcheckbox from "./Sportcheckbox";
import RangeSlider from "./RangeSlider";
import { useState } from "react";

const Details = (props) => {
  const {
    id,
    email,
    name,
    passsword,
    bio,
    profile_image_url,
    gender,
    birthdate,
    sports,
    km_range,
  } = props.user;
  const { isOpen, onToggle } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);

  const { state } = props

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
              <Textarea resize="none" h="7em" placeholder="Bio" />
            </FormControl>
          </GridItem>
          {/* Range */}
          <GridItem colSpan={2}>
            <FormLabel pb={9}>Update Range</FormLabel>
            <VStack>
              <Slider
                w="90%"
                aria-label="slider-ex-6"
                onChange={(val) => setSliderValue(val)}
              >
                <SliderMark
                  rounded={"md"}
                  value={sliderValue}
                  textAlign="center"
                  bg="teal.500"
                  color="white"
                  mt="-10"
                  ml="-7"
                  w="14"
                >
                  {sliderValue}km
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack bg="teal.500" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </VStack>
          </GridItem>
          {/* Prefrences */}
          <GridItem>
            <VStack alignItems="flex-start">
              <FormLabel>Update Preferences</FormLabel>
              <CheckboxGroup
                colSpan={2}
                defaultValue={["gender", "similar_age"]}
              >
                {" "}
                {/* Once matching prefrences are added to the ERD update this line to use the userObject */}
                <SimpleGrid columns={1} rowGap={2} w="full">
                  <Checkbox value="gender">
                    View same gender events only
                  </Checkbox>
                  <Checkbox value="similar_age">
                    View similar age events only
                  </Checkbox>
                </SimpleGrid>
              </CheckboxGroup>
            </VStack>
          </GridItem>

          {/* Sports */}
          <GridItem colSpan={2}>
            {/* checkbox component has an on user changed event that we can use to reflect on the users choice */}
            <FormLabel>Sports</FormLabel>

            <VStack alignItems="flex-start">
              <CheckboxGroup colSpan={2} defaultValue={sports}>
                <SimpleGrid columns={1} rowGap={3} w="full">
                  <Checkbox value="badminton">Badminton</Checkbox>
                  <Checkbox value="baseball">Baseball</Checkbox>
                  <Checkbox value="basketball">Basketball</Checkbox>
                  <Checkbox value="beachvolleyball">Beach Volleyball</Checkbox>
                  <Checkbox value="DiscGolf">Disc Golf</Checkbox>
                  <Checkbox value="canoeingkayaking">
                    Canoeing/Kayaking
                  </Checkbox>
                  <Checkbox value="curling">Curling</Checkbox>
                  <Checkbox value="cycling">Cycling</Checkbox>
                  <Checkbox value="football">Football</Checkbox>
                  <Checkbox value="golf">Golf</Checkbox>
                  <Checkbox value="hiking">Hiking</Checkbox>
                  <Checkbox value="iceclimbing">Ice Climbing</Checkbox>
                  <Checkbox value="lacrosse">Lacrosse</Checkbox>
                  <Checkbox value="pickleball">Pickleball</Checkbox>
                  <Checkbox value="racquetball">Racquetball</Checkbox>
                  <Checkbox value="rockclimbing">Rock Climbing</Checkbox>
                  <Checkbox value="rowing">Rowing</Checkbox>
                  <Checkbox value="rugby">Rugby</Checkbox>
                  <Checkbox value="running">Running</Checkbox>
                  <Checkbox value="sailing">Sailing</Checkbox>
                  <Checkbox value="skiing">Skiing</Checkbox>
                  <Checkbox value="soccer">Soccer</Checkbox>
                  <Checkbox value="spikeball">Spike Ball</Checkbox>
                  <Checkbox value="squash">Squash</Checkbox>
                  <Checkbox value="swimming">Swimming</Checkbox>
                  <Checkbox value="tabletennis">Table Tennis</Checkbox>
                  <Checkbox value="tennis">Tennis</Checkbox>
                  <Checkbox value="trailrunning">Trail Running</Checkbox>
                  <Checkbox value="ultimatefrisbee">Ultimate Frisbee</Checkbox>
                  <Checkbox value="volleyball">Volleyball</Checkbox>
                  <Checkbox value="yoga">Yoga</Checkbox>
                </SimpleGrid>
              </CheckboxGroup>
            </VStack>
          </GridItem>
          {/* Confirm (Would like replace with saving as you change it) */}
          <GridItem colSpan={2}></GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Details;
