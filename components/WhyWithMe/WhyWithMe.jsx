import { Box } from "@chakra-ui/react";
import React from "react";
import WhyWithMeTitle from "./WhyWithMeTitle";

export default function WhyWithMe() {
  return (
    <>
      <Box>
        <WhyWithMeTitle />
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box as='h3' px='1rem' fontSize={{ base: "23px", md: "38px" }} my={5}>
            I create websites FAST for a better experience.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            SEO optimization. I know the importance of the positioning.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            I create beautiful and modern design.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            Developtment centred in User Experience.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            Custom forms for get leads, users data or suscription for blogs.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            Email settings for marketing mailing.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            Responsive design. I create websites under Mobile First concept.
          </Box>
        </Box>
        <Box
          maxW='1200px'
          mx='auto'
          minH='80px'
          borderBottom='1px solid #0bcd8b6b'
        >
          <Box
            as='h3'
            px={{ base: "1rem", md: "0px" }}
            fontSize={{ base: "23px", md: "38px" }}
            my={5}
          >
            I will be a partner for your bussiness. A helper.
          </Box>
        </Box>
      </Box>
    </>
  );
}
