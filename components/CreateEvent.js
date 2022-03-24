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
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { icons } from "react-icons";
import { FcInfo } from "react-icons/fc";

const Details = () => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const [sliderValue, setSliderValue] = useState(50);
  const [startDate, setStartDate] = useState(new Date());
  const toast = useToast();

  return (
    <Container pb={20} maxW="container.md">
      <VStack w="full" h="full" p={10} spacing={10}>
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl"> Create Event </Heading>
        </VStack>
        <SimpleGrid columns={2} rowGap={6} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Event Name </FormLabel>
              <Input placeholder="First Name" />
            </FormControl>
            <GridItem mt="6" colSpan={2}>
              <FormLabel>Date</FormLabel>
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
              <Select placeholder="Select Sport">
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
                outline='none'
              >
              </IconButton>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="90%">
                  <ModalHeader>Preferences</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      Please be considerate when choosing these options. We
                      decided to include these options NOT to targetedly exclude
                      any gender or age groups, but to allow the option to
                      choose should it be preferred for your event where needed.
                      Please consider leaving these preferences open to include
                      all people whenever appropriate.
                    </Text>
                    <br></br>
                    <Text>
                      Depending on your selection, your event will only be shown
                      to others in the community who are also your gender, or
                      within your age group.
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
              <Checkbox>Same gender</Checkbox>
              <Checkbox>Same age group</Checkbox>
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Link href="/eventfeed">
              <Button
                colorScheme="teal"
                w="full"
                size="lg"
                onClick={() =>
                  toast({
                    title: "Event created.",
                    description: "Your event is now visible to the community",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                  })
                }
              >
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
