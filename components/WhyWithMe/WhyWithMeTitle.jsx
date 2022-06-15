import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function WhyWithMeTitle() {
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
          duration: 70,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      key='modal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        position='relative'
        w='100vw'
        maxW='100%'
        overflowX='hidden'
        h={{ base: "90px", md: "130px" }}
        mt='80px'
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
          <Box display='flex' alignItems='center' gap='20px'>
            <Box as={motion.div} fontSize={fontSize} fontWeight='bold'>
              Why with me? Why with me? Why with me? Why with me? Why with me?
              Why with me? Why with me? Why with me?
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
