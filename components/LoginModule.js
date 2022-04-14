import Link from "next/link";
import { setCookies } from "cookies-next";
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
import React, { useState } from "react";

const LoginModule = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const onClose = props.onClose;
  const [input, setInput] = useState("");

  console.log("KATY PERRY", input);

  return (
    <>
      <VStack flexDirection="row-reverse">
        <CloseButton
          onClick={() => {
            onClose();
          }}
        ></CloseButton>
      </VStack>
      <Container maxW="20em" flexDirection="column" justifyContent="center">
        <VStack flexDirection="column">
          <Heading>Please Log In</Heading>
          <SimpleGrid columns={1} rowGap={2} w="full">
            <GridItem colSpan={2}>
              <FormControl>
                <Input
                  focusBorderColor="teal.300"
                  type="email"
                  placeholder="Email Address"
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <InputGroup size="md">
                  <Input
                    focusBorderColor="teal.300"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      focusBorderColor="teal.300"
                      variant="link"
                      color="white"
                      colorScheme={"blackAlpha"}
                      h="1.5rem"
                      w="1rem"
                      fontSize="12px"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </GridItem>
          </SimpleGrid>
          <Link href="/eventfeed">
            <Button
              w="9em"
              type="submit"
              name={"Submit"}
              variant="outline"
              color="white"
              colorScheme="blackAlpha"
              onClick={setCookies("user_id", input)}
            >
              Submit
            </Button>
          </Link>
        </VStack>
      </Container>
    </>
  );
};

export default LoginModule;
