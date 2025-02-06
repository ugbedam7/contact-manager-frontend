import {
  Container,
  Box,
  Stack,
  Flex,
  Text,
  Heading,
  Spinner
} from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { useColorModeValue } from '@/components/ui/color-mode';
import { FiLogOut } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../App';
import { toast } from 'react-toastify';
import ContactView from './ContactView';

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/contacts/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
          }
        });

        const data = await res.json();
        console.log(data);
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

  if (loading) return <Spinner size="xl" />;

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
            Contact Details
          </Text>
        </Text>
        <ContactView contact={contact} />
      </Container>
    </Stack>
  );
};

export default ContactDetails;
