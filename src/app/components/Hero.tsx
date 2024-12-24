import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const images = ["/nice_edit.jpeg", "/faces.jpg", "/hair.jpg" ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return() => clearInterval(interval);
  }, [images.length])

  return (
    <Box
      height="100vh"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      color="white"
      overflow="hidden"
      id="hero"
    >
      {/* Carrusel de imágenes */}
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Título animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ zIndex: 1 }}
      >
        <Text fontSize="5xl" fontWeight="bold">
          Karen Schulz
        </Text>
      </motion.div>
    </Box>
  );
};

export default Hero;
