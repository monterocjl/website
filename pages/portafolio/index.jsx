import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

export default function About() {
  const { colorMode } = useColorMode();
  return (
    <Layout
      title='Juan Montero - Portafolio'
      description='Desarrollador Web y Diseñador UX/UI'
    >
      <motion.div
        key='modal'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Heading
          as='h1'
          fontSize={["30px", "40px"]}
          fontWeight={"bold"}
          mt={12}
          pt={12}
          textAlign={"center"}
        >
          Portafolio
        </Heading>

        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={"10px"}
          p={"20px 15px"}
          mt={"30px"}
          mb={"40px"}
        >
          <Box display={"flex"}>
            <Text fontSize={"1.1rem"} mr={2}>
              🐘
            </Text>
            <Text fontSize={"1.1rem"} mb={1}>
              Aquí podrás ver mis proyectos, cómo los llevé a cabo y lo que he{" "}
              <Code
                fontWeight={"600"}
                bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                p={".2em .4em"}
                borderRadius={"5px"}
              >
                aprendido
              </Code>{" "}
              de ellos.
            </Text>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box
            width={["100%", "48%"]}
            mb={7}
            borderRadius={"10px"}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={
              colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"
            }
          >
            <Link href='/portafolio/proyecto-cms-ecommerce'>
              <a>
                <Image
                  borderRadius={"10px 10px 0px 0px"}
                  src='/img/figma-1.jpg'
                  alt='Proyecto Website'
                  objectPosition='top'
                />
                <Heading
                  as='h2'
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                  mr={2}
                >
                  👨‍🏭 [En desarrollo] CMS para E-commerce
                </Heading>
                <Box
                  display={"flex"}
                  ml={3}
                  mt={3}
                  mb={5}
                  flexWrap='wrap'
                  gridGap='10px'
                >
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    React.Js
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Chakra UI
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Strapi
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    API Rest
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Figma
                  </Code>
                </Box>
              </a>
            </Link>
          </Box>
          <Box
            width={["100%", "48%"]}
            mb={7}
            borderRadius={"10px"}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={
              colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"
            }
          >
            <Link href='/portafolio/proyecto-smiledu'>
              <a>
                <Image
                  borderRadius={"10px 10px 0px 0px"}
                  src='/img/smiledu.png'
                  alt='Proyecto Website'
                  objectFit='contain'
                  p='12px 70px 10px 70px'
                  bg='white'
                />
                <Heading
                  as='h2'
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                  mr={2}
                >
                  👨‍🏫 Nuevo feature para Smiledu
                </Heading>
                <Box
                  display={"flex"}
                  ml={3}
                  mt={3}
                  mb={5}
                  flexWrap='wrap'
                  gridGap='10px'
                >
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Angular
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Sass
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Material design
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Pug Js
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Adobe XD
                  </Code>
                </Box>
              </a>
            </Link>
          </Box>
          <Box
            width={["100%", "48%"]}
            mb={7}
            borderRadius={"10px"}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={
              colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"
            }
          >
            <Link href='/portafolio/proyecto-website'>
              <a>
                <Image
                  borderRadius={"10px 10px 0px 0px"}
                  src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Proyecto Website'
                />
                <Heading
                  as='h2'
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                >
                  👨‍💻 Mi web/blog
                </Heading>
                <Box
                  display={"flex"}
                  ml={3}
                  mt={3}
                  mb={5}
                  flexWrap='wrap'
                  gridGap='10px'
                >
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Next.Js
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Markdown
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Chakra UI
                  </Code>
                </Box>
              </a>
            </Link>
          </Box>
          <Box
            width={["100%", "48%"]}
            borderRadius={"10px"}
            mb={7}
            bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
            boxShadow={
              colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"
            }
          >
            <Link href='/portafolio/proyecto-viabler'>
              <a>
                <Image
                  borderRadius={"10px 10px 0px 0px"}
                  src='https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='E-commerce'
                />
                <Heading
                  as='h2'
                  fontSize={["18px", "22px"]}
                  fontWeight={"bold"}
                  mt={5}
                  ml={3}
                >
                  🎨 Viabler
                </Heading>
                <Box
                  display={"flex"}
                  ml={3}
                  mt={3}
                  mb={5}
                  flexWrap='wrap'
                  gridGap='10px'
                >
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Wordpress
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    Marketplace
                  </Code>
                  <Code
                    fontWeight={"600"}
                    bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                    p={".2em .4em"}
                    borderRadius={"5px"}
                  >
                    UX/UI
                  </Code>
                </Box>
              </a>
            </Link>
          </Box>
        </Box>
      </motion.div>
    </Layout>
  );
}
