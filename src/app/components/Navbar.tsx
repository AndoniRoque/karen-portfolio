// components/Navbar.tsx
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

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
            <ScrollLink
              to="hero"
              smooth={true}
              duration={600}
              spy={true}
              offset={0} // Adjusts for navbar height
            >
              <Text cursor="pointer" color="white">
                Home
              </Text>
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
            >
              <Text cursor="pointer" color="white">
                Portfolio
              </Text>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
            >
              <Text cursor="pointer" color="white">
                About
              </Text>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
            >
              <Text cursor="pointer" color="white">
                Contact
              </Text>
            </ScrollLink>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
