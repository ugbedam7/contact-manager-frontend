import { Container, Box, Stack, Flex, Text } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { useColorModeValue } from '@/components/ui/color-mode';

const Dashboard = () => {
  return (
    <Stack bg={{ base: 'white', _dark: '#1A202C' }} minH={'100vh'}>
      <Container maxW={'900px'}>
        <Box
          px={4}
          my={4}
          borderRadius={5}
          bg={useColorModeValue('gray.200', 'gray.700')}>
          <Flex h="12" alignItems={'center'} justifyContent={'space-between'}>
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              gap={3}
              display={{ base: 'none', sm: 'flex' }}></Flex>
            <Flex gap={3} alignItems={'center'}>
              <Text
                fontSize={'lg'}
                fontWeight={500}
                display={{ base: 'none', md: 'block' }}>
                BFFship
              </Text>
              <ColorModeButton />
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
            Contact List
          </Text>
        </Text>
      </Container>
    </Stack>
  );
};

export default Dashboard;
