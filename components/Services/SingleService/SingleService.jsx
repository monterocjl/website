import { Box, Icon } from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function SingleService({
  start,
  title,
  subtitle,
  logo,
  Content,
  height,
}) {
  const { scrollYProgress } = useViewportScroll();
  const moveContent = useTransform(
    scrollYProgress,
    [0, 0.2 * start, 1],
    [250, 0, 0]
  );
  const moveTitle = useTransform(
    scrollYProgress,
    [0, 0.2 * start, 1],
    [250, 600, 600]
  );

  const moveContentMobile = useTransform(
    scrollYProgress,
    [0, 0.13 * start, 1],
    [300, 0, 0]
  );

  return (
    <>
      <Box
        gap={2}
        maxW='1200px'
        mx='auto'
        mb={8}
        display={{ base: "none", md: "block" }}
      >
        <Box
          as={motion.h3}
          minH={height}
          w='700px'
          bg='#0f0f0f'
          borderRadius='60px'
          position='absolute'
          style={{ x: moveContent }}
          p={10}
        >
          <Content />
        </Box>
        <Box
          as={motion.div}
          minH={height}
          w='600px'
          bgImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
          borderRadius='60px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          style={{ x: moveTitle }}
        >
          <Box
            position='absolute'
            left='-48px'
            bg='#0bcd8b5e'
            backdropFilter='blur(25px)'
            borderRadius='100px'
            padding='14px'
            w='100px'
            h='100px'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Icon fontSize='62px' as={logo} color='black' />
          </Box>
          <Box
            fontWeight='bold'
            textAlign='center'
            w='70%'
            lineHeight='53px'
            color='#000'
          >
            <Box fontSize='23px'>{subtitle}</Box>
            <Box fontSize='56px'>{title}</Box>
          </Box>
        </Box>
      </Box>

      <Box
        gap={2}
        px='1rem'
        mb={4}
        display={{ base: "block", md: "none" }}
        overflow='hidden'
      >
        <Box
          as={motion.div}
          minH='350px'
          bg='#0f0f0f'
          borderRadius={{ base: "30px", md: "60px" }}
          position='relative'
          style={{ x: moveContentMobile }}
          px={7}
          pt={10}
          pb={10}
        >
          <Content />
          <Box position='absolute' right='20px' top='23px' zIndex='1'>
            <Icon fontSize='55px' as={logo} color='#0bcd8b' />
          </Box>
        </Box>
      </Box>
    </>
  );
}
