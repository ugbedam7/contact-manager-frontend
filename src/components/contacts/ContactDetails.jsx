import { Container, Box, Stack, Flex, Text, Badge } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FiLogOut, FiArrowLeft, FiBell } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../App";
import { toast } from "react-toastify";
import ContactView from "./ContactView";

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Centralized color and background values
  const textColor = useColorModeValue("gray.900", "white");
  const bgColor = useColorModeValue("gray.200", "gray.700");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, []);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/api/contacts/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }

        setContact(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  return (
    <Stack bg={{ base: "white", _dark: "#1A202C" }} minH={"100vh"}>
      <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={bgColor}>
          <Flex h="12" alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={3} alignItems={"center"}>
              <Button onClick={() => navigate("/dashboard")} variant="outline">
                <FiArrowLeft />
              </Button>

              <ColorModeButton />
            </Flex>

            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={2}
              display={{ base: "block", sm: "flex" }}
            >
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
                  3
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

              <Flex
                alignItems={"center"}
                display={{ base: "none", md: "block" }}
              >
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
            Contact Details
          </Text>
        </Text>

        {loading ? (
          <Flex justifyContent={"center"}>
            <img src="/spinner.gif" alt="spinner" height={25} width={25} />
          </Flex>
        ) : contact ? (
          <ContactView contact={contact} setContact={setContact} />
        ) : (
          <Text
            textAlign="center"
            fontWeight={"semibold"}
            borderRadius={5}
            maxW={"400px"}
            mx="auto"
            p={2}
            fontSize="lg"
            bg={bgColor}
            color={textColor}
          >
            No Contact Found!
          </Text>
        )}
      </Container>
    </Stack>
  );
};

export default ContactDetails;
