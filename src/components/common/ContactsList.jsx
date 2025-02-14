import {
  Container,
  Box,
  Stack,
  Flex,
  Text,
  Input,
  Icon,
  Button
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactGrid from "../contacts/ContactGrid";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Centralized color and background values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const dashColor = useColorModeValue("gray.200", "gray.700");

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <Stack bg={{ base: "white", _dark: "#1A202C" }} minH={"100vh"}>
      <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={dashColor}>
          <Flex h="12" alignItems={"center"} justifyContent={"space-around"}>
            <Button onClick={() => navigate("/dashboard")} variant="outline">
              <Icon as={FaArrowLeft} boxSize={4} />
            </Button>
            <Flex
              alignItems={"center"}
              position={"relative"}
              w="100%"
              maxW="400px"
            >
              <Input
                bg={bgColor}
                color={textColor}
                placeholder="Search contacts"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                size="sm"
                pl={5}
              />
              {!searchQuery && (
                <Icon
                  position={"absolute"}
                  top={"3"}
                  right={"3"}
                  color={textColor}
                >
                  <FaSearch size={"20"} />
                </Icon>
              )}
            </Flex>
          </Flex>
        </Box>
      </Container>

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip={"text"}
          >
            Contacts List
          </Text>
        </Text>
        <ContactGrid
          contacts={contacts}
          setContacts={setContacts}
          searchQuery={searchQuery}
          showSearch={true}
        />
      </Container>
    </Stack>
  );
};

export default ContactsList;
