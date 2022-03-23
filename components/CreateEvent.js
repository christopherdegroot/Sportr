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
} from "@chakra-ui/react";
import Sportcheckbox from "./Sportcheckbox";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Details = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container pb={20} maxW="container.md">
      <VStack w="full" h="full" p={10} spacing={10} >
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl"> Create Event </Heading>
        </VStack>
        <SimpleGrid columns={2} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Event Name </FormLabel>
              <Input placeholder="First Name" />
            </FormControl>
            <GridItem mt='6' colSpan={2}>
              <FormLabel>Date</FormLabel>
              <div class="date-picker">
              <DatePicker 
                showTimeSelect
                dateFormat="Pp"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              </div>
            </GridItem>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>What sport would you like to play?</FormLabel>
              <Select placeholder="Sport">
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
              <FormLabel>Event Description</FormLabel>
              <Textarea resize="none" h="7em" placeholder="Description" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Text pb="3" fontSize={"lg"}>
              Any Preferences?
            </Text>
            <Stack spacing={5} direction="row">
              <Checkbox>Same gender</Checkbox>
              <Checkbox>Same age group</Checkbox>
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="/profile">
              <Button colorScheme="blue" w="full" size="lg">
                Create Event
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Details;
