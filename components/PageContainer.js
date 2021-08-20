import { Heading, useColorMode, VStack } from '@chakra-ui/react';

const PageContainer = ({ children, title }) => {
  const { colorMode } = useColorMode();

  return (
    <VStack>
      <Heading pt={24} as="h1" size="2xl" pb={24} textAlign="center">
        {title}
      </Heading>
      {children}
    </VStack>
  );
};

export default PageContainer;
