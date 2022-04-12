// test doc for chakra

import {
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
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="center"
      bg="gray.50"
    >
      <Heading>My Events</Heading>
    </VStack>
  );
};

export default Details;
