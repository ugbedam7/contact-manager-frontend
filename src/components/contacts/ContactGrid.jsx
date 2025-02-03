import { Grid, Text, Flex } from '@chakra-ui/react';
import ContactCard from './ContactCard';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://contact-app-be-t5jz.onrender.com';

const ContactGrid = ({ contacts = [], setContacts }) => {
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

  if (isLoading) {
    return (
      <Flex justifyContent={'center'}>
        <img src="/spinner.gif" alt="spinner" height={50} width={50} />
      </Flex>
    );
  }

  if (!isLoading && contacts.length === 0) {
    return (
      <Flex justifyContent="center">
        <Text fontSize="xl" color={'white'}>
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
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
      }}
      gap={4}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          setContacts={setContacts}
        />
      ))}
    </Grid>
  );
};

export default ContactGrid;
