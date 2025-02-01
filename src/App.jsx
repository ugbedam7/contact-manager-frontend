import { Container, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Stack bg={{ base: 'white', _dark: '#1A202C' }} minH={'100vh'} p={8}>
      <Container>
        <h1>Hello, world!</h1>
      </Container>
    </Stack>
  );
}

export default App;
