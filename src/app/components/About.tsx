import { Box, Text, Image, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" py={20}>
      <Text textAlign="center" fontSize="6xl" mb={10}>
        About me
      </Text>
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
          Hola, soy Karen Shulz.
          Vivo en Bahia Blanca - Buenos Aires. 
          Soy creadora de contenido, ayudo a modelos, locales y emprendedores a poder lucir su imagen o productos. 
          Y en mis tiempos libres hago un poco de lo mismo, solo que me entretego con paisajes y animalitos. 
          Si gustas, podes revisar mi instagram.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;
