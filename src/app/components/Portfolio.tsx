import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Portfolio = () => {
  // Define the array with image URLs you want to use
  const images = [
    "/djs.jpg", // Image 1 (relative path to the public folder)
    "/patagonia.jpg", // Image 2
    "/ropa.jpg", // Image 3
    // Add more images as needed
  ];

  return (
    <Box id="portfolio" py={20}>
      <Text textAlign="center" fontSize="4xl" mb={10}>
        Portfolio
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} px={5}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <Box>
              <Image
                src={src} // Use the current image URL from the array
                alt={`Portfolio Image ${index + 1}`}
                borderRadius="md"
                boxSize="100%"
              />
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
