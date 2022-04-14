import {
  ButtonGroup,
  AddIcon,
  VStack,
  Button,
  Box,
  Flex,
  Container,
  colorScheme,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { SiAddthis, SiTinder } from "react-icons/si";
import { MdOutlineSportsKabaddi, MdPerson } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  BsCalendarEvent,
  BsFillCalendarPlusFill,
  BsFillCalendarDayFill,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import EventFeed from "./EventFeed";

const EventToggleButton = () => {
  const [leftToggle, setLeftToggle] = useState(true);
  const swapToggle = function (tf) {
    setLeftToggle(tf);
  };

  return (
    <>
      <VStack mt="10" flexDirection={"row"} justifyContent={"center"}>
        {leftToggle && (
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button
              onClick={() => {
                swapToggle(true);
              }}
              variant={"solid"}
              colorScheme={"teal"}
              mr="-px"
            >
              Find Events
            </Button>
            <Button
              onClick={() => {
                swapToggle(false);
              }}
              variant={"outline"}
              colorScheme={"teal"}
              mr="-px"
            >
              My Events
            </Button>
          </ButtonGroup>
        )}
        {!leftToggle && (
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button
              onClick={() => {
                swapToggle(true);
              }}
              variant={"outline"}
              colorScheme={"teal"}
              mr="-px"
            >
              Find Events
            </Button>
            <Button
              onClick={() => {
                swapToggle(false);
              }}
              variant={"solid"}
              colorScheme={"teal"}
              mr="-px"
            >
              My Events
            </Button>
          </ButtonGroup>
        )}
      </VStack>
    </>
  );
};

export default EventToggleButton;
