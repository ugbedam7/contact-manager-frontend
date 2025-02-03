import { Box, Card, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';
import { Avatar } from '@/components/ui/avatar';
import { useColorModeValue } from '@/components/ui/color-mode';
import EditContact from './EditContactModal';

const BASE_URL = 'http://localhost:5000';

const ContactCard = ({ contact, setContacts }) => {
  const handleDeleteContact = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact.id}`, {
        method: 'DELETE'
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setContacts((prevContacts) =>
        prevContacts.filter((u) => u.id !== contact.id)
      );
      console.log(data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Card.Root bg={useColorModeValue('#fff', 'gray.700')}>
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={'1'} gap={'4'} alignItems={'start'}>
            <Avatar src={contact.imgUrl} />
            <Box>
              <Heading fontWeight="semibold" textStyle="xl">
                {contact.name}
              </Heading>
              <Text marginBottom={'0'}>{contact.email}</Text>
              <Text color="fg.muted" textStyle="md">
                {contact.phone}
              </Text>
              <Text>{contact.address}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditContact contact={contact} setContacts={setContacts} />
            <Icon
              fontSize="21px"
              color={'tomato'}
              cursor={'pointer'}
              onClick={handleDeleteContact}>
              <BiTrash />
            </Icon>
          </Flex>
        </Flex>
      </Card.Header>
    </Card.Root>
  );
};

export default ContactCard;

{
  /* <Card.Root bg={useColorModeValue('gray.100', 'gray.700')}>
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar src="https://avatar.iran.liara.run/public" />
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              {user.name}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              {user.role}
            </Text>
          </Stack>
        </HStack>
        <Card.Description>{user.description}</Card.Description>
      </Card.Body>
    </Card.Root> */
}
