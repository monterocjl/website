import {
  Box,
  Flex,
  Avatar,
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
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <a>
                <Avatar
                  bg={"#4e77f9"}
                  size={"md"}
                  src={"http://localhost:3000/img/avatar.png"}
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
              <Link href="/">
                <a className="navbar-titles">Sobre mi</a>
              </Link>

              <Link href="/">
                <a className="navbar-titles">Portafolio</a>
              </Link>

              <Link href="/blog">
                <a className="navbar-titles">Blog</a>
              </Link>
            </HStack>
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
          <Box align="right" pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">
                <a className="navbar-titles">Sobre mi</a>
              </Link>

              <Link href="/">
                <a className="navbar-titles">Portafolio</a>
              </Link>

              <Link href="/blog">
                <a className="navbar-titles">Blog</a>
              </Link>
              <div>
                <a
                  className="social-footer"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={GrTwitter} />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noreferrer">
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
