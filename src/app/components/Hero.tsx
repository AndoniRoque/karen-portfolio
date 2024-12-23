import { Box, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      height="100vh"
      bgImage="url('/nice_edit.jpeg')"
      bgSize="contain"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      color="white"
      position="relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text fontSize="5xl" fontWeight="bold">
          Karen Schultz
        </Text>
      </motion.div>
    </Box>
  );
};

export default Hero;
