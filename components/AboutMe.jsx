import Link from "next/link";
import { motion } from "framer-motion";
import {
  Box,
  Heading,
  Divider,
  Text,
  Code,
  UnorderedList,
  ListItem,
  List,
  ListIcon,
  Tag,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MdCheckCircle, MdInfoOutline } from "react-icons/md";

export default function AboutMe() {
  const { colorMode } = useColorMode();
  return (
    <>
      <motion.div
        key='modal'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box pt={12} pl={1} pr={1}>
          <Box mt={5} mb={5}>
            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
            >
              👨‍💻 Frontend developer / UI Designer
            </Heading>

            <Divider
              borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"}
              mb={5}
            />
            <Box>
              <Text fontSize={"1.1rem"} mb={4}>
                En cada proyecto que desarrollo, siempre tengo en cuenta
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  la experiencia del usuario
                </Code>
                ,{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  la usabilidad
                </Code>{" "}
                y{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  el diseño.
                </Code>
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                Por otro lado, me gusta mucho todo lo que tenga que ver con
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  emprendimiento
                </Code>
                , sobretodo el ecosistema de{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  startups
                </Code>{" "}
                y la creación de
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  producto
                </Code>
                . Es por eso que, me mantengo en constante aprendizaje sobre el
                desarrollo de
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  negocios
                </Code>
                .
              </Text>
            </Box>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={"52px"}
            >
              🎖 Skills
            </Heading>

            <Divider
              borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"}
              mb={5}
            />

            <UnorderedList pl={2} spacing={2}>
              <ListItem fontSize={"1.1rem"}>
                Desarrollo centrado en la experiencia del usuario.
              </ListItem>
              <ListItem fontSize={"1.1rem"}>Aprendizaje continuo.</ListItem>
              <ListItem fontSize={"1.1rem"}>Creatividad.</ListItem>
              <ListItem fontSize={"1.1rem"}>Trabajo en equipo.</ListItem>
              <ListItem fontSize={"1.1rem"}>Proactividad.</ListItem>
              <ListItem fontSize={"1.1rem"}>
                Escribir y comunicar ideas.
              </ListItem>
            </UnorderedList>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={10}
            >
              👨‍🚀 Tecnologías
            </Heading>
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={"10px"}
              p={"20px 15px"}
            >
              <List>
                <ListItem fontSize={"1.1rem"}>
                  <ListIcon as={MdCheckCircle} color='#4e77f9' />
                  Javascript(ES6), HTML, CSS, React.js / Next.js, Chakra UI,
                  Framer Motion.
                </ListItem>
              </List>
            </Box>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={8}
            >
              ⚙️ Herramientas
            </Heading>
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={"10px"}
              p={"20px 15px"}
            >
              <List>
                <ListItem fontSize={"1.1rem"}>
                  <ListIcon as={MdCheckCircle} color='#4e77f9' />
                  Github, Notion, Asana, Figma, Adobe Ai / Ps / Pr / Lr.
                </ListItem>
              </List>
            </Box>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={8}
            >
              🧊 CMS
            </Heading>
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={"10px"}
              p={"20px 15px"}
            >
              <List>
                <ListItem fontSize={"1.1rem"}>
                  <ListIcon as={MdCheckCircle} color='#4e77f9' />
                  Wordpress / Woocommerce y Shopify.
                </ListItem>
              </List>
            </Box>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={"52px"}
            >
              📋 Un poco más sobre mí
            </Heading>

            <Divider
              borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"}
              mb={5}
            />

            <Box>
              <Text fontSize={"1.1rem"} mb={4}>
                Inicié mi vida profesional en el{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  diseño
                </Code>
                , creando piezas gráficas para distintas empresas.
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                Mi siguiente paso fue capacitarme en{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  UX/UI Design
                </Code>{" "}
                y en las metodologías necesarias para crear productos digitales{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  centrados en el usuario.
                </Code>
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                Y desde hace 1 año y medio tomé la decisión de sumergirme en el{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  desarrollo web.
                </Code>
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                Por último, si tuviera que elegir una cualidad que destaco de
                mi, sería el mantenerme en constante aprendizaje.
              </Text>
            </Box>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={"52px"}
            >
              🌍 Intereses personales
            </Heading>

            <Divider
              borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"}
              mb={5}
            />
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={"10px"}
              p={"20px 15px"}
            >
              <Box display={"flex"}>
                <Text fontSize={"1.1rem"} mr={2}>
                  📝
                </Text>
                <Text fontSize={"1.1rem"} mb={4}>
                  Me gusta escribir y compartir mis ideas en mi blog y redes
                  sociales.
                </Text>
              </Box>

              <Box display={"flex"}>
                <Text fontSize={"1.1rem"} mr={2}>
                  📷
                </Text>
                <Text fontSize={"1.1rem"} mb={4}>
                  Me apasiona la fotografía. Siento que me conecta con mi lado
                  artístico.
                </Text>
              </Box>

              <Box display={"flex"}>
                <Text fontSize={"1.1rem"} mr={2}>
                  📰
                </Text>
                <Text fontSize={"1.1rem"} mb={1}>
                  El tipo de contenido que consumo está relacionado a
                  tecnología, desarrollo web, negocios, diseño y fútbol.
                </Text>
              </Box>
            </Box>

            <Divider
              borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"}
              my={8}
            />
            <Box
              bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
              borderWidth={colorMode === "dark" ? "0px" : "1px"}
              borderRadius={"10px"}
              p={"20px 15px"}
            >
              <Box
                display={"flex"}
                justifyContent='center'
                gridGap={2}
                fontWeight='bold'
              >
                <Text fontSize={"1.1rem"} mb={1} fontStyle='italic'>
                  &quot;Learn to sell, learn to build. If you can do both, you
                  will be unstoppable.&quot;
                </Text>
                <Text fontSize={"1.1rem"}>Naval</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}
