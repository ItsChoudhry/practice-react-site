import { Divider, Flex, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function Social() {
  const [isNotMobile] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotMobile ? "row" : "column"}
      alignSelf="center"
      alignItems={"center"}
    >
      <Text
        bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
        bgClip="text"
        fontSize={"3xl"}
        fontWeight="bold"
      >
        Distributed Systems
      </Text>
      <Spacer w={"25px"}></Spacer>
      <Divider width={"50px"}></Divider>
      <Spacer w={"25px"}></Spacer>
      <Text
        bgColor={"purple.500"}
        bgClip="text"
        fontSize={"3xl"}
        fontWeight="bold"
      >
        AI
      </Text>
      <Spacer w={"25px"}></Spacer>
      <Divider width={"50px"}></Divider>
      <Spacer w={"25px"}></Spacer>
      <Text
        bgGradient={"linear(to-l, cyan.400, blue.500, purple.600)"}
        bgClip="text"
        fontSize={"3xl"}
        fontWeight="bold"
      >
        Game dev
      </Text>
    </Flex>
  );
}
