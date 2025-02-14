import { Grid, Text, Flex } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import { ToastContainer } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import CreateContactModal from "../contacts/CreateContactModal";

const ContactGrid = ({
  contacts = [],
  setContacts,
  searchQuery = "",
  showSearch = true,
  userId = null
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Centralized color and background values
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      try {
        const endpoint = userId
          ? `${BASE_URL}/api/contacts?userId=${userId}` // Fetch only the user's contacts
          : `${BASE_URL}/api/contacts`;

        // const res = await fetch(`${BASE_URL}/api/contacts`);
        const res = await fetch(endpoint);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        setContacts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getContacts();
  }, [userId]);

  // If searchQuery is empty (""), .includes("") will always return true,
  // meaning all contacts will be displayed. If searchQuery contains text,
  // only matching contacts will be shown.
  const displayedContacts = showSearch
    ? contacts.filter((contact) =>
        `${contact.firstname || ""} ${contact.lastname || ""}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : contacts;

  if (isLoading) {
    return (
      <Flex justifyContent={"center"}>
        <img src="/spinner.gif" alt="spinner" height={50} width={50} />
      </Flex>
    );
  }

  if (!isLoading && displayedContacts.length === 0) {
    return (
      // <Flex justifyContent="center">
      //   <Text fontSize="xl" color={"white"}>
      //     <Text as="span" fontSize="2xl" fontWeight="semibold" mr={2}>
      //       Sorry!
      //     </Text>
      //     No Contacts Found.
      //   </Text>
      // </Flex>
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
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)"
      }}
      gap={4}
      overflow={"hidden"}
    >
      {displayedContacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          setContacts={setContacts}
          cardMinWidth={"350px"}
        />
      ))}
      <ToastContainer />
    </Grid>
  );
};

export default ContactGrid;
