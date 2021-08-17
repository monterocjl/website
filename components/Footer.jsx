import Link from "next/link";
import { GrTwitter, GrInstagram, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { Box, Heading, Text, Code, Image, HStack, Icon,} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        
        <HStack
            as={"footer"}
        >
            <Box
                pt={20}
                pb={10}
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                maxWidth={'800px'}
                ml={'auto'}
                mr={'auto'} 
            >

            <Box 
                display={'flex'} 
                fontSize={'18px'}
                bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
                borderWidth={colorMode === "dark" ? "0px" : "1px"}
                p={'10px 15px'}
                borderRadius={'10px'}
            >
                <Text as={'h5'} mr={5}>
                    Date una vuelta 👉
                </Text>
                <Box mr={3}>
                <a href="https://twitter.com/monterocjl" target="_blank" rel="noreferrer">
                <Icon as={GrTwitter} />
                </a>
                </Box>

                <Box mr={3}>
                <a href="https://github.com/monterocjl" target="_blank" rel="noreferrer">
                <Icon as={GrGithub} />
                </a>
                </Box>

                <Box mr={3}>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Icon as={GrLinkedinOption} />
                </a>
                </Box>

                <Box>
                <a href="https://www.instagram.com/crecimiento.digital_/" target="_blank" rel="noreferrer">
                <Icon as={GrInstagram} />
                </a>
                </Box>
                             
            </Box>


            </Box>
        </HStack>
)}