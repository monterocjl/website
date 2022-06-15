import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Banner() {
  const [marquee, setMarquee] = useState(0);
  const fontSize = { base: "50px", md: "90px", lg: "90px" };

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1000) {
      setMarquee(-3090);
    } else {
      setMarquee(-1825);
    }
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, marquee],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  const hoverProfesion = {
    scale: 1.07,
    rotate: -2,
    transition: {
      duration: 0.3,
    },
  };

  return (
    <motion.div
      key='modal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box pt={12} maxW='1200px' mx='auto' mt={10}>
        <Heading
          as='h2'
          fontSize={fontSize}
          lineHeight='1.1'
          mx={{ base: "1rem", md: "0" }}
        >
          Hi, my name is
          <br />
          Juan Montero and I&apos;m
        </Heading>
      </Box>
      <Box
        position='relative'
        w='100vw'
        maxW='100%'
        overflowX='hidden'
        h={{ base: "90px", md: "130px" }}
        mt='-15px'
        mb={{ base: "15px", md: "50px" }}
        overflowY='hidden'
      >
        <Box
          as={motion.div}
          variants={marqueeVariants}
          animate='animate'
          position='absolute'
          whiteSpace='nowrap'
        >
          <Box display='flex' alignItems='center' gridGap='20px'>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#21D4FD",
                backgroundImage:
                  "linear-gradient(253deg, #21D4FD 0%, #B721FF 100%)",
                bgClip: "text",
              }}
            >
              UI Designer
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#08AEEA",
                backgroundImage:
                  "linear-gradient(253deg, #08AEEA 0%, #2AF598 100%)",
                bgClip: "text",
              }}
            >
              Developer
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#21D4FD",
                backgroundImage:
                  "linear-gradient(253deg, #21D4FD 0%, #B721FF 100%)",
                bgClip: "text",
              }}
            >
              Human
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#FBDA61",
                backgroundImage:
                  "linear-gradient(253deg, #FBAB7E 0%, #F7CE68 100%)",
                bgClip: "text",
              }}
            >
              Photographer
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#FBAB7E",
                backgroundImage:
                  "linear-gradient(253deg, #FBDA61 0%, #FF5ACD 100%)",
                bgClip: "text",
              }}
            >
              Drink coffee
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#08AEEA",
                backgroundImage:
                  "linear-gradient(253deg, #08AEEA 0%, #2AF598 100%)",
                bgClip: "text",
              }}
            >
              Reader
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#21D4FD",
                backgroundImage:
                  "linear-gradient(253deg, #21D4FD 0%, #B721FF 100%)",
                bgClip: "text",
              }}
            >
              UI Designer
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#08AEEA",
                backgroundImage:
                  "linear-gradient(253deg, #08AEEA 0%, #2AF598 100%)",
                bgClip: "text",
              }}
            >
              Developer
            </Box>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              /
            </Box>
            <Box
              as={motion.div}
              fontSize={fontSize}
              whileHover={hoverProfesion}
              fontWeight='bold'
              _hover={{
                backgroundColor: "#21D4FD",
                backgroundImage:
                  "linear-gradient(253deg, #21D4FD 0%, #B721FF 100%)",
                bgClip: "text",
              }}
            >
              Human
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
