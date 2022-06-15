import { Box } from "@chakra-ui/react";

export default function Quote() {
  return (
    <>
      <Box
        w='100%'
        maxW='1200px'
        fontSize={{ base: "37px", md: "55px" }}
        textAlign='center'
        fontWeight='bold'
        px={{ base: "1rem", md: "0" }}
        pt='100px'
        pb={6}
      >
        <Box
          as='h2'
          mb={{ base: "-9px", md: "0px" }}
          backgroundColor='#21D4FD'
          backgroundImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
          bgClip='text'
        >
          Make your project a reality.
        </Box>
      </Box>
    </>
  );
}
