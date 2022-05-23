import Image from "next/image";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import { HamburgerIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";

import Link from "next/link";
import { GrTwitter, GrInstagram } from "react-icons/gr";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        pt={1}
        position='fixed'
        backdropFilter='blur(10px)'
        zIndex='9999'
        w='100%'
        top='0'
        maxW='1000px'
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link href='/'>
              <a>
                <Image
                  width={"48px"}
                  height={"48px"}
                  priority
                  src='/img/avatar.png'
                  alt='Juan Montero'
                />
              </a>
            </Link>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              mr={5}
              spacing={5}
              display={{ base: "none", md: "flex" }}
            >
              <Link href='/'>
                <a className='navbar-titles'>Inicio</a>
              </Link>
              <Link href='/about'>
                <a className='navbar-titles'>Sobre mí</a>
              </Link>

              <Link href='/portafolio'>
                <a className='navbar-titles'>Portafolio</a>
              </Link>

              <Link href='/blog'>
                <a className='navbar-titles'>Blog</a>
              </Link>
            </HStack>
            {/* <Link href="/contacto">
              <a>
                <Button
                  variant={"outline"}
                  borderColor={"#4e77f9"}
                  color={"#4e77f9"}
                  size={"sm"}
                  mr={4}
                  leftIcon={<EmailIcon />}
                >
                  Contacto
                </Button>
              </a>
            </Link> */}

            <DarkModeSwitch />

            <IconButton
              size={"sm"}
              ml={"4"}
              variant={"outline"}
              borderColor={"#4e77f9"}
              color={"#4e77f9"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box align='right' pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href='/'>
                <a className='navbar-titles'>Inicio</a>
              </Link>

              <Link href='/about'>
                <a className='navbar-titles'>Sobre mí</a>
              </Link>

              <Link href='/portafolio'>
                <a className='navbar-titles'>Portafolio</a>
              </Link>

              <Link href='/blog'>
                <a className='navbar-titles'>Blog</a>
              </Link>
              <div>
                <a
                  className='social-footer'
                  href='https://twitter.com/monterocjl'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon as={GrTwitter} />
                </a>

                <a
                  href='https://instagram.com/crecimiento.digital_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon as={GrInstagram} />
                </a>
              </div>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
