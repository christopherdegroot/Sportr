import Link from "next/link";
import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack 
      w="full" 
      h="full" 
      p={10} 
      spacing={10} 
      alignItems="flex-start" 
      bg="gray.50"
    >
      <VStack spacing={3} alignItems='flex-start'>
      <Heading size="2xl"> Please Register </Heading>
      <Text> If you already have an account, click here to log in </Text>
      </VStack>
      <SimpleGrid columns={1} rowGap={6} w='full'>
      <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>First Name </FormLabel>
            <Input placeholder="First Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Last Name </FormLabel>
            <Input placeholder="Last Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Email </FormLabel>
            <Input placeholder="Email" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Password </FormLabel>
            <Input placeholder="Password" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Confirm Password </FormLabel>
            <Input placeholder="Password" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Tell Us About Yourself </FormLabel>
            <Input placeholder="Bio" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>What sport do you want to play?</FormLabel>
            <Select>
              <option value="SpikeBall">Spike Ball</option>
              <option value="DiscGolf">Disc Golf</option>
              <option value="Tennis">Tennis</option>
              <option value="Basketball">Basketball</option>
              <option value="BeachVolleyball">Beach Volleyball</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          {/* checkbox component has an on user changed event that we can use to reflect on the users choice */}
          <FormLabel>What sports are you interested in?</FormLabel>
          <VStack alignItems='flex-start'>
          <Checkbox>Spike Ball</Checkbox>
          <Checkbox colSpan={2} value="DiscGolf">Disc Golf</Checkbox>
          <Checkbox value="Tennis">Tennis</Checkbox>
          <Checkbox value="Basketball">Basketball</Checkbox>
          <Checkbox value="BeachVolleyball">Beach Volleyball</Checkbox>
          </VStack>
        </GridItem>
        <GridItem>
          <Link href='/profile'>
          <Button w="full" size="lg">Sign up</Button>
          </Link>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}

export default Details;