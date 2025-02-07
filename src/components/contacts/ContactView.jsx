import {
  Box,
  Container,
  Flex,
  Stack,
  Avatar,
  Card,
  Text,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const ContactDetailItem = ({ label, value }) => (
  <Flex justify="space-between" w="full">
    <Text flex={"1"} fontWeight="bold" className="view">
      {label}
    </Text>
    <Text flex={"1"} className="view">
      {value}
    </Text>
  </Flex>
);

const ContactView = ({ contact }) => {
  if (!contact) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Text fontSize="xl" color="red.500">
          No Contact Found!
        </Text>
      </Flex>
    );
  }
  return (
    <Stack minH={"100vh"}>
      <Container maxW={{ base: "100%", md: "600px" }}>
        <Card.Root
          bg={useColorModeValue("gray.200", "gray.700")}
          px={4}
          borderRadius={5}
        >
          <Card.Body>
            <Flex
              align="start"
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
            >
              <Flex align="start" gap={6} flex={1}>
                <Avatar.Root size={"2xl"} shape="rounded">
                  <Avatar.Fallback name={contact.name} />
                  <Avatar.Image src={contact.imgUrl} />
                </Avatar.Root>

                <Box>
                  <Text className="view" fontWeight="bold" textStyle="xl">
                    {contact.name}
                  </Text>
                  <Text
                    color={useColorModeValue("gray.900", "white")}
                    textStyle="lg"
                    marginBottom={"0"}
                  >
                    {contact.email}
                  </Text>
                  <Text color="#329FF3" textStyle="lg">
                    {contact.xhandle}
                  </Text>
                </Box>
              </Flex>
              <Button colorPalette="red" size="xs" borderRadius={4}>
                Delete
              </Button>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Flex
          borderRadius={5}
          align={"center"}
          justify={"space-between"}
          mt={6}
          p={2}
          bg={useColorModeValue("gray.200", "gray.700")}
          color={useColorModeValue("gray.900", "white")}
        >
          <Box ml={4} fontSize="lg" fontWeight="semibold">
            Contact Details
          </Box>
          <Button
            bg="#329FF3"
            color={"white"}
            size="xs"
            borderRadius={4}
            mr={4}
          >
            Update
          </Button>
        </Flex>

        <Box
          p={6}
          mt={2}
          height={"full"}
          borderRadius={5}
          bg={useColorModeValue("gray.200", "gray.700")}
          color={useColorModeValue("gray.900", "white")}
        >
          <Stack spacing={3}>
            <ContactDetailItem
              label="First Name"
              value={contact.name.split(" ")[0]}
            />
            <ContactDetailItem
              label="Last Name"
              value={contact.name.split(" ")[1] || ""}
            />
            <ContactDetailItem label="Email" value={contact.email} />
            <ContactDetailItem label="Mobile" value={contact.phone} />
            <ContactDetailItem label="Address" value={contact.address} />
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
};

export default ContactView;
