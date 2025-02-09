import { Grid, Text, Flex } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import { ToastContainer } from "react-toastify";

const ContactGrid = ({ contacts = [], setContacts, searchQuery }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/api/contacts`);
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
  }, []);

  // If searchQuery is empty (""), .includes("") will always return true,
  // meaning all contacts will be displayed. If searchQuery contains text,
  // only matching contacts will be shown.
  const filteredContacts = contacts.filter((contact) =>
    contact.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <Flex justifyContent={"center"}>
        <img src="/spinner.gif" alt="spinner" height={50} width={50} />
      </Flex>
    );
  }

  if (!isLoading && filteredContacts.length === 0) {
    return (
      <Flex justifyContent="center">
        <Text fontSize="xl" color={"white"}>
          <Text as="span" fontSize="2xl" fontWeight="bold" mr={2}>
            Sorry!
          </Text>
          No Contacts Found.
        </Text>
      </Flex>
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
      }}
      gap={4}
    >
      {filteredContacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          setContacts={setContacts}
        />
      ))}
      <ToastContainer />
    </Grid>
  );
};

export default ContactGrid;
