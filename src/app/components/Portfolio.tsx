import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Portfolio = () => {
  // Define the array with image URLs you want to use
  const items = [
    { src: "/djs.jpg", label: "Eventos" },
    { src: "/patagonia.jpg", label: "Comercial" },
    { src: "/ropa.jpg", label: "Indumentaria" },
    { src: "/hair.jpg", label: "Artístico" },
  ];

  return (
    <Box id="portfolio" py={20}>
      <Text textAlign="center" fontSize="6xl" mb={10}>
        Portfolio
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} px={5}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <Box h={500} overflow={"hidden"} borderRadius={"md"} position={"relative"}>
              <Image
                src={item.src} // Use the current image URL from the array
                alt={`Portfolio Image ${index + 1}`}
                borderRadius="md"
                boxSize="100%"
                objectFit="cover"
                _hover={{
                  transform: "scale(1.1)",
                  filter: "grayscale(100%)"
                }}
                transition="transform 1s ease-in-out"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity="0" // Ocultar texto inicialmente
                bg="rgba(0, 0, 0, 0.6)" // Fondo semitransparente al hover
                transition="opacity 0.5s ease-in-out"
                _hover={{
                  opacity: "1", // Mostrar texto al hover
                }}
              >
                <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"} textAlign={"center"} > {item.label}</Text>
              </Box>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
