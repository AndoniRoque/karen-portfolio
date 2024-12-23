import { Box, Text, Image, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" py={20}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap={10}
      >
        <Image
          src="/profile.jpeg"
          borderRadius="full"
          boxSize="150px"
          alt="Photographer"
        />
        <Text fontSize="2xl" maxWidth="600px">
          Hello, I&apos;m Karen Schultz, a passionate photographer who loves to
          capture life&apos;s precious moments.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
