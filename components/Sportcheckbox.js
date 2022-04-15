import {
  CloseButton,
  ButtonGroup,
  Container,
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
  isLoading,
  InputGroup,
  InputRightElement,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";

const Sportcheckbox = () => {
  return (
    <VStack alignItems="flex-start">
      <CheckboxGroup colSpan={2}>
        <SimpleGrid columns={1} rowGap={2} w="full">
          <Checkbox value="badminton">Badminton</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
          <Checkbox value="beachvolleyball">Beach Volleyball</Checkbox>
          <Checkbox value="DiscGolf">Disc Golf</Checkbox>
          <Checkbox value="canoeingkayaking">Canoeing/Kayaking</Checkbox>
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
  );
};

export default Sportcheckbox;
