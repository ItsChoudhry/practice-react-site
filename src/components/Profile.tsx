import {
  Flex,
  useMediaQuery,
  Box,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { DiPython, DiJavascript } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

export default function Profile() {
  const [isNotMobile] = useMediaQuery("(min-width:600px)");
  let num = 5;
  return (
    <Flex
      direction={isNotMobile ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf={"center"} px="32" py="16">
        <Heading fontWeight={"extrabold"} color="cyan.500" size={"4xl"}>
          {num + "+"}
        </Heading>
        <Text fontSize={"2xl"} color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf={"center"} px="32" py="16">
        {/* <Text fontWeight={"bold"} fontSize="2xl">
          Software engineer, operating systems, game development, web
          development
        </Text> */}
        <Flex direction={isNotMobile ? "row" : "column"} mt={8}>
          <Flex
            rounded={"xl"}
            direction="column"
            mt={4}
            bg="blue.400"
            h={"30vh"}
            w={"30vh"}
            justify="flex-end"
          >
            <Icon color={"white"} p="4" as={SiCplusplus} w="24" h="24"></Icon>
            <Text color={"white"} p="4" fontSize={"xl"} fontWeight="semibold">
              C++
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction="column"
            mt={4}
            bg="gray.100"
            h={"30vh"}
            w={"30vh"}
            justify="flex-end"
            ml={isNotMobile ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color={"black"} p="4" as={DiPython} w="24" h="24"></Icon>
            <Text color={"black"} p="4" fontSize={"xl"} fontWeight="semibold">
              Python
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction="column"
            mt={4}
            bg="gray.100"
            h={"30vh"}
            w={"30vh"}
            justify="flex-end"
            ml={isNotMobile ? 4 : 0}
            _hover={{ bg: "green.400" }}
          >
            <Icon color={"black"} p="4" as={DiJavascript} w="24" h="24"></Icon>
            <Text color={"black"} p="4" fontSize={"xl"} fontWeight="semibold">
              JS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
