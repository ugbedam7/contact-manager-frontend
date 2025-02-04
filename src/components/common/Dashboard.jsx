import { Container, Box, Stack, Flex, Text, Input } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { useColorModeValue } from '@/components/ui/color-mode';
import CreateContactModal from '../contacts/CreateContactModal';
import ContactGrid from '../contacts/ContactGrid';
import { FiLogOut } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Stack bg={{ base: 'white', _dark: '#1A202C' }} minH={'100vh'}>
      <Container maxW={'900px'}>
        <Box
          px={4}
          my={4}
          borderRadius={5}
          bg={useColorModeValue('gray.200', 'gray.700')}>
          <Flex h="12" alignItems={'center'} justifyContent={'space-between'}>
            <Flex gap={3} alignItems={'center'}>
              <ColorModeButton />
              <CreateContactModal setContacts={setContacts} />
            </Flex>
            <Flex gap={3} alignItems={'center'}>
              <Input
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.900', 'white')}
                placeholder="Search contacts"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                size="sm"
                pl={5}
              />
            </Flex>

            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              gap={3}
              display={{ base: 'block', sm: 'flex' }}>
              <Flex
                gap={3}
                alignItems={'center'}
                display={{ base: 'none', md: 'block' }}>
                <Box
                  fontSize="md"
                  fontWeight="semibold"
                  color={useColorModeValue('gray.900', 'white')}>
                  {sessionStorage.getItem('user')}
                </Box>
              </Flex>

              <Button variant="outline">
                <FiLogOut onClick={handleLogout} />
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>

      <Container maxW={'1200px'} my={4}>
        <Text
          fontSize={{ base: '3xl', md: '50' }}
          fontWeight={'bold'}
          letterSpacing={'2px'}
          textTransform={'uppercase'}
          textAlign={'center'}
          mb={8}>
          <Text
            as={'span'}
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip={'text'}>
            Contacts List
          </Text>
        </Text>
        <ContactGrid
          contacts={contacts}
          setContacts={setContacts}
          searchQuery={searchQuery}
        />
      </Container>
    </Stack>
  );
};

export default Dashboard;
