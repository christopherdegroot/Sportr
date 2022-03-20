import Link from "next/link";
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
  isLoading
} from "@chakra-ui/react";

const LoginModule = (props) => {
  const onClose = props.onClose;
  return (
    <>
    <VStack flexDirection='row-reverse'>
      <CloseButton onClick={() => {onClose();}}></CloseButton>
      </VStack>
      <Container maxW="20em" flexDirection='column' justifyContent='center'>
        <VStack flexDirection='column' >
          <Heading>Please Log In</Heading>
          <SimpleGrid columns={1} rowGap={2} w="full">
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email Address" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input marginBottom='1.5em' type="password" placeholder="Password" />
              </FormControl>
            </GridItem>
          </SimpleGrid>
          <Link href="/profile">
            <Button w="9em" type="submit" name={"Submit"} variant="outline" color='white' colorScheme="blackAlpha">
              Submit
            </Button>
          </Link>
        </VStack>
      </Container>
    </>
  );
};

export default LoginModule;
