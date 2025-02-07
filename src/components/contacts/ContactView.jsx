import {
  Box,
  Container,
  Flex,
  Stack,
  Avatar,
  Card,
  Strong,
  Text
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

const ContactView = ({ contact }) => {
  return (
    <Stack minH={'100vh'}>
      <Container maxW={'800px'}>
        <Card.Root
          bg={useColorModeValue('gray.200', 'gray.700')}
          px={4}
          borderRadius={5}>
          <Card.Body>
            <Flex gap="10">
              <Avatar.Root size={'2xl'} shape="rounded">
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src={contact.imgUrl} />
              </Avatar.Root>

              <Flex flexDirection={'column'}>
                <Text marginBottom={'0'} fontWeight="semibold" textStyle="xl">
                  {contact.name}
                </Text>
                <Text marginBottom={'0'} color="fg.muted" textStyle="md">
                  Email: {contact.email}
                </Text>
                <Text color="fg.muted" textStyle="md">
                  Twitter: @natefoss
                </Text>
              </Flex>
            </Flex>
          </Card.Body>
        </Card.Root>
        <Box
          borderRadius={5}
          textStyle={'lg'}
          textAlign={'center'}
          p={4}
          my={4}
          bg={useColorModeValue('gray.200', 'gray.700')}
          color={useColorModeValue('gray.900', 'white')}>
          <Text color={'white'} className="view">
            <Strong>Contact Details</Strong>
          </Text>
        </Box>

        <Flex
          p={4}
          borderRadius={5}
          gap={40}
          bg={useColorModeValue('gray.200', 'gray.700')}
          color={useColorModeValue('gray.900', 'white')}>
          <Box>
            <Text className="view">
              <Strong>Email</Strong>
            </Text>
            <Text className="view">
              <Strong>Firstname</Strong>
            </Text>
            <Text className="view">
              <Strong>Lastname</Strong>
            </Text>
            <Text className="view">
              <Strong>Mobile</Strong>
            </Text>
            <Text className="view">
              <Strong>Address</Strong>
            </Text>
          </Box>
          <Box>
            <Text className="view">{contact.email}</Text>
            <Text className="view">{contact.name.split(' ')[0]}</Text>
            <Text className="view">{contact.name.split(' ')[1]}</Text>
            <Text className="view">{contact.phone}</Text>
            <Text className="view">{contact.address}</Text>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};

export default ContactView;
