import { Box, Text, Button, HStack } from "@chakra-ui/react";
import { FaInstagram, FaFlickr } from "react-icons/fa";

const Contact = () => {
  return (
    <Box id="contact" py={20} bg="gray.100" color="black">
      <Text textAlign="center" fontSize="4xl" mb={10}>
        Contact Me
      </Text>
      <Text textAlign="center" fontSize="xl" mb={5}>
        Feel free to reach out for bookings or inquiries!
      </Text>
      <Text textAlign="center" fontSize="lg" mb={10}>
        Email: photographer@example.com
      </Text>

      <HStack justify="center" gap={6}>
        {/* Instagram Button */}
        <Button
          as="a"
          href="https://www.instagram.com/yourusername" // Replace with your Instagram URL
          target="_blank"
          variant="outline"
          colorScheme="pink"
          size="lg"
          color={"black"}
          leftIcon={<FaInstagram />}
        >
          Instagram
        </Button>

        {/* Flickr Button */}
        <Button
          as="a"
          href="https://www.flickr.com/yourusername" // Replace with your Flickr URL
          target="_blank"
          variant="outline"
          colorScheme="black"
          color={"black"}
          size="lg"
          leftIcon={<FaFlickr />}
        >
          Flickr
        </Button>
      </HStack>
    </Box>
  );
};

export default Contact;
