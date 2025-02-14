import {
  Container,
  Box,
  Stack,
  Flex,
  Text,
  Badge,
  Button
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FiBell, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactGrid from "../contacts/ContactGrid";
import CreateContactModal from "../contacts/CreateContactModal";
import { useAuth } from "../AuthContext";
import { ColorModeButton } from "@/components/ui/color-mode";
import { FaArrowRight } from "react-icons/fa";
// import { BASE_URL } from "../../App";

const UserDashboard = () => {
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const [contacts, setContacts] = useState([]);
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   setUser(sessionStorage.getItem("user"));

  //   const fetchContacts = async () => {
  //     const userId = sessionStorage.getItem("userId");
  //     try {
  //       const res = await fetch(`${BASE_URL}/api/contacts?userId=${userId}`, {
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem("authToken")}` // Pass token for authentication
  //         }
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch contacts");
  //       }

  //       const data = await res.json();
  //       console.log(data);
  //       setContacts(data);
  //     } catch (error) {
  //       console.error("Error fetching contacts:", error);
  //     }
  //   };

  //   fetchContacts();
  // }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Centralized color and background values
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Stack bg={{ base: "white", _dark: "#1A202C" }} minH={"100vh"}>
      <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={bgColor}>
          <Flex h="12" alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={3} alignItems={"center"}>
              <Button
                onClick={() => navigate("/dashboard/contacts")}
                variant="outline"
              >
                View All Contacts
              </Button>
              <ColorModeButton />
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
              <Box position="relative">
                <Button variant="ghost">
                  <FiBell />
                </Button>
                <Badge
                  position="absolute"
                  top="1"
                  right="3"
                  color={textColor}
                  borderRadius="full"
                  fontSize="0.7em"
                  bg={"red.500"}
                  size={"xs"}
                >
                  2
                </Badge>
              </Box>
              {isAuthenticated && (
                <Badge
                  bg={isAuthenticated ? "green.500" : "gray.400"}
                  borderRadius="full"
                  size={"xs"}
                  p={2}
                ></Badge>
              )}
              <Flex alignItems={"center"}>
                <Box fontSize="md" fontWeight="semibold" color={textColor}>
                  {user}
                </Box>
              </Flex>
              <Button variant="outline" onClick={handleLogout}>
                <FiLogOut />
              </Button>
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
            Your Contacts
          </Text>
        </Text>
        {/* {contacts.length === 0 ? (
          <Flex justifyContent="center" gap={3}>
            <Text color={textColor} bg={bgColor} p={2} borderRadius={4}>
              No Contacts Yet. Create One{" "}
              <span style={{ display: "inline-block" }}>
                <FaArrowRight />
              </span>
            </Text>

            <Text bg={bgColor} borderRadius={4}>
              <CreateContactModal setContacts={setContacts} />
            </Text>
          </Flex>
        ) : (
          <ContactGrid
            showSearch={false}
            userId={sessionStorage.getItem("userId")}
          />
        )} */}
        <ContactGrid
          contacts={contacts}
          setContacts={setContacts}
          showSearch={false}
          userId={sessionStorage.getItem("userId")}
        />
      </Container>
    </Stack>
  );
};

export default UserDashboard;
