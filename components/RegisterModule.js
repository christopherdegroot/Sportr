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
import Register from "./Register";

const RegisterModule = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const onClose = props.onClose;
  return (
    <>
      <Register></Register>
    </>
  );
};

export default RegisterModule;
