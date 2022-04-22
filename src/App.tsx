import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaDev,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Choudhry
        </Heading>
        <Spacer></Spacer>
        <IconButton
          aria-label="twitter link"
          icon={<FaTwitter />}
          isRound
          onClick={() => window.open("https://twitter.com/itsChoudhry")}
        ></IconButton>
        <IconButton
          aria-label="instagram link"
          ml={2}
          icon={<FaInstagram />}
          isRound
          onClick={() => window.open("https://instagram.com/itsChoudhry")}
        ></IconButton>
        <IconButton
          aria-label="github link"
          ml={2}
          icon={<FaGithub />}
          isRound
          onClick={() => window.open("https://github.com/itsChoudhry")}
        ></IconButton>
        <IconButton
          aria-label="youtube link"
          ml={2}
          icon={<FaYoutube />}
          isRound
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCJPKS3Vvg-yRjTYKsg06lvw"
            )
          }
        ></IconButton>
        <IconButton
          aria-label="dev.io link"
          ml={2}
          icon={<FaDev />}
          isRound
          onClick={() => window.open("https://dev.to/itschoudhry")}
        ></IconButton>
        <IconButton
          aria-label=""
          ml={8}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          isRound
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}
