import { useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { SiTwitter } from "react-icons/si";
import Form from "../Form/Form";
import { motion } from "framer-motion";

export default function Contact({ scrollDiv }) {
  const [showTwitter, setShowTwitter] = useState(0);

  const logoTwitter = {
    default: {
      opacity: showTwitter,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoTwitterMobile = {
    default: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
  };

  const hoverTwitter = {
    scale: 1.07,
    rotate: -2,
    transition: {
      duration: 1,
      type: "spring",
      damping: 5,
    },
  };

  return (
    <>
      <Box
        w='100%'
        maxW='1200px'
        px={{ base: "1rem", md: "0px" }}
        ref={scrollDiv}
      >
        <Box as='h3' fontWeight='bold' fontSize={{ base: "23px", md: "38px" }}>
          If you want to work with me, you can find me on
          <motion.span
            onHoverStart={() => setShowTwitter(1)}
            onHoverEnd={() => setShowTwitter(0)}
            whileHover={hoverTwitter}
            style={{ marginLeft: "9px", position: "relative" }}
          >
            <a
              href='https://twitter.com/monterocjl'
              style={{ textDecoration: "underline" }}
            >
              Twitter
            </a>{" "}
            <Box
              as={motion.div}
              variants={logoTwitter}
              animate='default'
              position='absolute'
              top='-6px'
              right='-42px'
              zIndex='-1'
            >
              <Icon fontSize='72px' as={SiTwitter} color='#0bc58f' />
            </Box>
            <Box
              as={motion.div}
              variants={logoTwitterMobile}
              animate='default'
              position='absolute'
              top='-2px'
              right='-25px'
              zIndex='-1'
              display={{ base: "block", md: "none" }}
            >
              <Icon fontSize='40px' as={SiTwitter} color='#0bc58f' />
            </Box>
          </motion.span>
        </Box>
        <Box fontWeight='bold' fontSize={{ base: "23px", md: "38px" }}>
          or...
        </Box>
        <Box fontWeight='bold' fontSize={{ base: "23px", md: "38px" }}>
          send me a message
        </Box>
      </Box>
      <Form />
    </>
  );
}
