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
    <Container maxW="container.md">
      <VStack w="full" h="full" p={10} spacing={10} bg="gray.50">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl"> Create Event </Heading>
        </VStack>
        <SimpleGrid columns={2} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Event Name </FormLabel>
              <Input placeholder="First Name" />
            </FormControl>
            <GridItem p={6} colSpan={2}>
              <DatePicker
                showTimeSelect
                dateFormat="Pp"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </GridItem>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>What sport would you like to play?</FormLabel>
              <Select placeholder="Sport">
                <option value="spikeball">Spike Ball</option>
                <option value="discgolf">Disc Golf</option>
                <option value="basketball">Basketball</option>
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
