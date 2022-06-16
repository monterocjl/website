import Image from "next/image";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar({ scrollSmoothHandler }) {
  return (
    <>
      <Box px={4} pt={1} zIndex='99' maxW='1200px' w='100%' top='0'>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link href='/'>
              <a>
                <Image
                  width={"52px"}
                  height={"52px"}
                  priority
                  src='/img/logo-jl.png'
                  alt='Juan Montero'
                />
              </a>
            </Link>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              size={"md"}
              bgImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
              color='#000'
              onClick={scrollSmoothHandler}
              ml={2}
              fontWeight='bold'
              _hover={[]}
              _focus={[]}
            >
              Contact
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
