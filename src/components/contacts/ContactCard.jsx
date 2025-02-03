import { Box, Card, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';
import { Avatar } from '@/components/ui/avatar';
import { useColorModeValue } from '@/components/ui/color-mode';
import EditContact from './EditContactModal';
import { toast, ToastContainer } from 'react-toastify';

const BASE_URL = 'http://localhost:5000';

const ContactCard = ({ contact, setContacts }) => {
  const handleDeleteContact = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
        }
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      setContacts((prevContacts) =>
        prevContacts.filter((u) => u._id !== contact._id)
      );
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Card.Root
      bg={useColorModeValue('#fff', 'gray.700')}
      transform={'scale(1)'}
      transition={'all 0.3s'}
      _hover={{ transform: 'scale(1.02)' }}
      boxShadow={'md'}
      borderRadius={'md'}>
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
      <ToastContainer />
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
