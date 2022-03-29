import {
  ChakraProvider,
  Flex,
  Heading,
  Container,
  Button,
  HStack,
  Link,
  Box,
  theme,
  Avatar,
  Text,
  Center,
  Stack,
} from "@chakra-ui/react";
import { MdOutlinePhoneIphone } from "react-icons/md";

import { Textbox } from "./textArea";

import { FaGithub, FaTwitter } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export function Footer() {
  return (
    <>
      <Stack
        direction={"horizontal"}
        h={"100vh"}
        alignItems={"center"}
        wrap={"wrap"}
        p="4"
        gap={"20"}
        justifyContent="space-around"
        bg={"#10101a"}
        color="rgb(175, 167, 167)"
      >
        <Stack
          id="contacts"
          direction={"column"}
          alignItems={"center"}
          spacing={"4"}
        >
          <Heading>You can find me 👇 here</Heading>{" "}
          <Flex align={"cneter"} gap="3">
            <MdOutlinePhoneIphone />
            <h1>08789213238</h1>
          </Flex>
          <Link
            href="https://www.linkedin.com/in/udit-kishor-b764a922b/"
            target={"_blank"}
            _hover={{ textDecoration: "none" }}
          >
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
          </Link>
          <Link
            href="https://github.com/Uditkishore"
            _hover={{ textDecoration: "none" }}
            target={"_blank"}
          >
            <Button bg={"#1b1f23"} leftIcon={<FaGithub />}>
              {" "}
              Github
            </Button>{" "}
          </Link>
          <Link
            href="https://twitter.com/UDITKISHOR2"
            _hover={{ textDecoration: "none" }}
            target={"_blank"}
          >
            {" "}
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              {" "}
              Twitter
            </Button>
          </Link>
        </Stack>

        <Feature title="Thanks for your visit" desc={<Textbox />} />
      </Stack>
    </>
  );
}
