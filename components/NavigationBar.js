import {
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

const NavigationBar = () => {
  return (
    <>
      <Flex zIndex={"9999"} as="footer" position="fixed" bottom="0" w="100%">
        <Box bg="#C7E0D6" w="100%" p={2} px={3}>
          <HStack justify="space-around">
            <Link href="/eventfeed" passHref>
              <IconButton
                aria-label="Event Feed"
                icon={<FaSearch size="22" />}
                size="lg"
                color="#008080"
                variant="ghost"
              />
            </Link>
            <Link href="/create-event">
              <IconButton
                aria-label="Your Events"
                icon={<BsFillCalendarPlusFill size="25" />}
                size="lg"
                color="#008080"
                variant="ghost"
              />
            </Link>
            <Link href="/profile" passHref>
              <IconButton
                aria-label="Profile"
                icon={<MdPerson size="35" />}
                size="lg"
                color="#008080"
                variant="ghost"
              />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default NavigationBar;
