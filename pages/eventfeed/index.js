import {
  Stack,
  ButtonGroup,
  Button,
  VStack,
} from "@chakra-ui/react";
import EventFeed from "../../components/EventFeed";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import useApplicationData from "../../hooks/useApplicationData";
import { getCookie } from "cookies-next";

export default function Userhome(props) {
  const { state, createUserEvent, changeUserEvent } = useApplicationData();
  const [leftToggle, setLeftToggle] = useState(true);
  const swapToggle = function(tf) {
    setLeftToggle(tf);
  };

  return (
    <>
      <VStack pt={7}>
        {leftToggle && (
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button
              size={"md"}
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
              size={"md"}
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
              size={"md"}
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
              size={"md"}
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

      <Stack
        flexDirection={"column-reverse"}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        p={3}
        pb={20}
      >
        {leftToggle && (
          <EventFeed
            user_id={getCookie("user_id")}
            state={state}
            createUserEvent={createUserEvent}
            changeUserEvent={changeUserEvent}
            findEvents={true}
          ></EventFeed>
        )}
        {!leftToggle && (
          <EventFeed
            user_id={getCookie("user_id")}
            state={state}
            createUserEvent={createUserEvent}
            changeUserEvent={changeUserEvent}
            profileEvents={true}
          ></EventFeed>
        )}
      </Stack>
      <NavigationBar />
    </>
  );
}
