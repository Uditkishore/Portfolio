import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

export function About() {
  return (
    <Box id="about" border={"2px"} bgGradient="linear(to-l, #10101a, #FF0080)">
      <Box
        display={"flex"}
        flexDirection="column"
        margin="20px"
        justifyContent={"space-around"}
        bg={"#10101a"}
        boxShadow="3px 3px 7px  5px black"
      >
        <Center
          color={"rgb(175, 167, 167)"}
          fontSize={"5xl"}
          fontWeight={"bold"}
          className="p-5"
        >
          About Me
        </Center>
        <Text
          lineHeight={"10"}
          fontSize="xl"
          margin={"10"}
          textAlign={"justify"}
          color={"rgb(175, 167, 167)"}
        >
          As a teenager in school, I learned the basic fundamentals of software
          and hardware and used to complete my task using ms office and
          PowerPoint. I was very much passionate about exploring and learning
          more about web applications and their functionalities. I always loved
          tinkering with operating systems like rebooting and troubleshooting
          the systems and upgrading them to the latest version of windows. I did
          my bachelor's in Electrical Engineering from Gurukula Kangri
          Vishwavidyalaya, Haridwar. I used to learn web development from open
          sources like youtube, Telegram, W3 school, Stack overflow and MDN.
          Currently, I am an Intern at Masai school and learning MERN - Stack,
          HTML, CSS and Javascript. I did some small projects individually like
          Youtube, Github, Weather app, Movies app and Food app. I also have
          done collaborative projects during my construct weeks like cloning The
          Home Depot and Dineout websites. Exploring new palaces and going on
          adventure trips are my hobbies, I also like listening to music and
          reading articles.
        </Text>
      </Box>
    </Box>
  );
}
