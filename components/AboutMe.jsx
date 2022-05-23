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
import useLanguage from "../hooks/useLanguage";

export default function AboutMe() {
  const { colorMode } = useColorMode();
  const { language } = useLanguage();

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
                {language
                  ? "En cada proyecto que desarrollo, siempre tengo en cuenta"
                  : "In all my projects I have in mind the"}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  {language ? "la experiencia del usuario" : "user experience"}
                </Code>
                ,{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  {language ? "la usabilidad" : "usability"}
                </Code>{" "}
                {language ? "y" : "and"}{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  {language ? "el diseño" : "design"}
                </Code>
                .
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                {language
                  ? "Por otro lado, me gusta mucho todo lo que tenga que ver con"
                  : "I really like everything about "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  {language ? "emprendimiento" : "entrepreneurship"}
                </Code>
                {language ? ", sobretodo el ecosistema de" : ""}{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  startups
                </Code>{" "}
                {language ? "y la creación de" : "ecosystem and "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  {language ? "producto" : "product"}
                </Code>
                {language
                  ? ". Es por eso que, me mantengo en constante aprendizaje sobre el desarrollo de"
                  : "design. That is why I am constantly learning about"}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                  ml={1}
                >
                  {language ? "negocios" : "business"}
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
                {language
                  ? "Desarrollo centrado en la experiencia del usuario."
                  : "Development focused on the user experience."}
              </ListItem>
              <ListItem fontSize={"1.1rem"}>
                {language ? "Aprendizaje continuo." : "Continuous learning."}
              </ListItem>
              <ListItem fontSize={"1.1rem"}>
                {language ? "Creatividad." : "Creativity."}
              </ListItem>
              <ListItem fontSize={"1.1rem"}>
                {language ? "Trabajo en equipo." : "Work team."}
              </ListItem>
              <ListItem fontSize={"1.1rem"}>
                {language ? "Proactividad." : "Proactivity."}
              </ListItem>
              <ListItem fontSize={"1.1rem"}>
                {language
                  ? "Escribir y comunicar ideas."
                  : "Write and communicate ideas."}
              </ListItem>
            </UnorderedList>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={10}
            >
              👨‍🚀 {language ? "Tecnologías" : "Technologies"}
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
              ⚙️ {language ? "Herramientas" : "Tools"}
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
                  {language
                    ? "Wordpress / Woocommerce y Shopify."
                    : "Wordpress / Woocommerce and Shopify."}
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
              📋 {language ? "Un poco más sobre mí" : "More about me"}
            </Heading>

            <Divider
              borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"}
              mb={5}
            />

            <Box>
              <Text fontSize={"1.1rem"} mb={4}>
                {language
                  ? "Inicié mi vida profesional en el"
                  : "I started my professional life in"}{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  {language ? "diseño" : "design"}
                </Code>
                {language
                  ? ", creando piezas gráficas para distintas empresas."
                  : ", creating graphic pieces for different companies."}
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                {language
                  ? "Mi siguiente paso fue capacitarme en"
                  : "My next step was to train myself in"}{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  UX/UI Design
                </Code>{" "}
                {language
                  ? "y en las metodologías necesarias para crear productos digitales"
                  : "and the methodologies to create digital products focused on the"}{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  {language ? "centrados en el usuario." : "user"}
                </Code>
                .
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                {language
                  ? "Y desde hace 2 años tomé la decisión de sumergirme en el"
                  : "since 2 years ago I made the decision to immerse myself in"}{" "}
                <Code
                  fontWeight={"600"}
                  bg={colorMode === "dark" ? "#193548" : "#c9d1ec"}
                  p={".2em .4em"}
                  borderRadius={"5px"}
                >
                  {language ? "desarrollo web." : "web development."}
                </Code>
              </Text>
              <Text fontSize={"1.1rem"} mb={4}>
                {language
                  ? "Por último, si tuviera que elegir una cualidad que destaco de mi, sería el mantenerme en constante aprendizaje."
                  : "Finally, if I had to choose a quality that I highlight from me, it would be to keep myself in constant learning."}
              </Text>
            </Box>

            <Heading
              as='h2'
              fontSize={["20px", "26px"]}
              fontWeight={600}
              mb={2}
              mt={"52px"}
            >
              🌍 {language ? "Intereses personales" : "Personal interests"}
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
                  {language
                    ? "Me gusta escribir y compartir mis ideas en mi blog y redes sociales."
                    : "I like to write and share my ideas on my blog and social networks."}
                </Text>
              </Box>

              <Box display={"flex"}>
                <Text fontSize={"1.1rem"} mr={2}>
                  📷
                </Text>
                <Text fontSize={"1.1rem"} mb={4}>
                  {language
                    ? "Me apasiona la fotografía. Siento que me conecta con mi lado artístico."
                    : "I am passionate about photography. I feel like it connects me with my artistic side."}
                </Text>
              </Box>

              <Box display={"flex"}>
                <Text fontSize={"1.1rem"} mr={2}>
                  📰
                </Text>
                <Text fontSize={"1.1rem"} mb={1}>
                  {language
                    ? "El tipo de contenido que consumo está relacionado a tecnología, desarrollo web, negocios, diseño y fútbol."
                    : "The type of content I consume is related to technology, web development, business, design and soccer."}
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
