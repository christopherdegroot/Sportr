import React from "react";
import classNames from "classnames";
import {
  Button,
  PhoneIcon,
  AddIcon,
  WarningIcon,
  Icon,
  Badge,
  StarIcon,
  Image,
  Box,
  SimpleGrid,
  Container,
  VStack,
  Heading,
  CheckIcon,
  ButtonGroup,
  IconButton,
  EmailIcon,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
  Collapse,
  Flex,
  Avatar,
  HStack,
} from "@chakra-ui/react";

// InterviewerListItem component
export default function InterviewerListItem(props) {
  const { avatar, title, selected, description, owner } = props;
  return (
    <Flex pt={5}>
      <Avatar size={'sm'} src={avatar} />
      <Box flexDirection={'column'} ml="3">
          <Text fontWeight="bold">
            {title}
            {owner && <Badge ml="1" colorScheme="green">
              owner
            </Badge>}
          </Text>
        <Text fontSize="sm">
          {description}
        </Text>
      </Box>
    </Flex>
  );
}
