import { Heading, useColorMode, VStack } from '@chakra-ui/react';

const PageContainer = ({ children, title }) => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      h="100vh"
      bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      transition="background 100ms linear"
    >
      <Heading pt={24} as="h1" size="2xl" pb={24} textAlign="center">
        {title}
      </Heading>
      {children}
    </VStack>
  );
};

export default PageContainer;
