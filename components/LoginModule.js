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
  isLoading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const LoginModule = (props) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
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
                <Input 
                focusBorderColor="teal.300"
                type="email" placeholder="Email Address" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                <Input
                  focusBorderColor="teal.300"
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button focusBorderColor="teal.300" variant="outline" color="white" colorScheme={'blackAlpha'} h='1.5rem' w='2rem' fontSize='12px' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
