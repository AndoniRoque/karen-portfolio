// components/Navbar.tsx
import { Box, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="fixed"
      width="100%"
      bg="rgba(0, 0, 0, 0.7)"
      p={4}
      zIndex={10}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="2xl" color="white">
          Photographer
        </Text>
        {!isMobile && (
          <Flex gap={4}>
            <NextLink href="#home">
              <Link color="white">Home</Link>
            </NextLink>
            <NextLink href="#portfolio">
              <Link color="white">Portfolio</Link>
            </NextLink>
            <NextLink href="#about">
              <Link color="white">About</Link>
            </NextLink>
            <NextLink href="#contact">
              <Link color="white">Contact</Link>
            </NextLink>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
