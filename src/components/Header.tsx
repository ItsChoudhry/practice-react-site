import {
  useColorMode,
  useMediaQuery,
  Stack,
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

export default function Header() {
  const { colorMode } = useColorMode();

  const [isNotMobile] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        size={"300px"}
        alignSelf="flex-end"
      ></Circle>
      <Flex
        direction={isNotMobile ? "row" : "column"}
        p={isNotMobile ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotMobile ? "0" : 16} alignSelf="flex-start">
          <Text fontSize={"5xl"} fontWeight="semibold">
            HI! IT'S
          </Text>
          <Text
            fontSize={"7xl"}
            fontWeight="bold"
            bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
            bgClip="text"
          >
            Choudhry
          </Text>
          <Text color={colorMode === "dark" ? "gray.200" : "gray.500"}>
            Engineer. Mathematician. Weeb. Love Machine.
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://twitter.com/itsChoudhry")}
          >
            Contact Me
          </Button>
        </Box>
        <Image
          alignSelf={"center"}
          mt={isNotMobile ? "0" : "12"}
          mb={isNotMobile ? "0" : "12"}
          borderRadius="full"
          backgroundColor={"transparent"}
          boxShadow="lg"
          boxSize={"300px"}
          src="https://avatars.githubusercontent.com/u/23042676?v=4"
        ></Image>
      </Flex>
    </Stack>
  );
}
