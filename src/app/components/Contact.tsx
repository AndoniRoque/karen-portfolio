import { Box, Text, HStack } from "@chakra-ui/react";
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
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/schu_lens/"
          target="_blank"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "inline-block",
            marginRight: "10px",
          }}
        >
          <FaInstagram /> Instagram
        </a>

        {/* Flickr Link */}
        <a
          href="https://www.flickr.com/people/165956434@N08/"
          target="_blank"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          <FaFlickr /> Flickr
        </a>

        {/* Behance Link */}
        <a
          href="https://www.behance.net/bulmamanson/projects#"
          target="_blank"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          <FaFlickr /> Behance
        </a>
      </HStack>
    </Box>
  );
};

export default Contact;
