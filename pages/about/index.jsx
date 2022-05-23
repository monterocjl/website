import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Divider, Text, Code, UnorderedList, ListItem, List, ListIcon, Tag } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MdCheckCircle, MdInfoOutline } from "react-icons/md"
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title="Juan Montero - Sobre mi"
      description="Desarrollador Web y Diseñador UX/UI"    
    >
    <motion.div 
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        pt={12}
        pl={1}
        pr={1}
      >
        
        <Heading
        as="h1"
        fontSize={["30px", "40px"]}
        fontWeight={"bold"}
        mt={12}
        mb={12}
        textAlign={"center"}
        >
          Sobre mí
        </Heading>
      <Box
        mt={5}
        mb={5}
      >
        <Heading
          as="h2"
          fontSize={["20px", "26px"]}
          fontWeight={600}
          mb={2}
        >
          👨‍💻 UX/UI Frontend developer          
        </Heading>
        
        <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
          <Box>
            <Text fontSize={'1.1rem'} mb={4}>
              Desarrollo mis proyectos siempre enfocados en <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>la experiencia del usuario</Code>, <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>la usabilidad</Code> y <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>el diseño.</Code>
            </Text>
            <Text fontSize={'1.1rem'} mb={4}>
            Tengo espíritu <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>emprendedor</Code> y a parte del desarrollo web, también me mantengo en constante aprendizaje sobre <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>negocios</Code> y el desarrollo de <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>productos digitales</Code>.
            </Text>
          </Box>

        <Heading
          as="h2"
          fontSize={["20px", "26px"]}
          fontWeight={600}
          mb={2}
          mt={'52px'}
        >
          🎖 Skills          
        </Heading>
        
        <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
        
        <UnorderedList pl={2} spacing={2}>
          <ListItem fontSize={'1.1rem'} >Desarrollo centrado en la experiencia del usuario.</ListItem>
          <ListItem fontSize={'1.1rem'} >Aprendizaje continuo.</ListItem>
          <ListItem fontSize={'1.1rem'} >Creatividad.</ListItem>
          <ListItem fontSize={'1.1rem'} >Trabajo en equipo.</ListItem>
          <ListItem fontSize={'1.1rem'} >Proactividad.</ListItem>
          <ListItem fontSize={'1.1rem'} >Escribir y comunicar ideas.</ListItem>
        </UnorderedList>

        <Heading
          as="h2"
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
          borderRadius={'10px'}
          p={'20px 15px'}
        >
          <List>
            <ListItem fontSize={'1.1rem'}>
              <ListIcon as={MdCheckCircle} color="#4e77f9" />
              Javascript(ES6), HTML, CSS, React.js / Next.js, Chakra UI.
            </ListItem>
          </List>
        </Box>

        <Heading
          as="h2"
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
          borderRadius={'10px'}
          p={'20px 15px'}
        >
          <List>
            <ListItem fontSize={'1.1rem'}>
              <ListIcon as={MdCheckCircle} color="#4e77f9" />
                Github, Notion, Asana, Figma, Adobe Ai / Ps / Pr / Lr.
            </ListItem>
          </List>
        </Box>

        <Heading
          as="h2"
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
          borderRadius={'10px'}
          p={'20px 15px'}
        >
          <List>
            <ListItem fontSize={'1.1rem'}>
              <ListIcon as={MdCheckCircle} color="#4e77f9" />
              Wordpress / Woocommerce y Shopify.
            </ListItem>
            <ListItem fontSize={'1.1rem'}>
              <ListIcon as={MdInfoOutline} color="#4e77f9" />
              Siempre tocando algunas líneas de código según los requerimientos de cada proyecto.
            </ListItem>            
          </List>
        </Box>

        <Heading
          as="h2"
          fontSize={["20px", "26px"]}
          fontWeight={600}
          mb={2}
          mt={'52px'}
        >
          📋 Un poco más sobre mí          
        </Heading>
        
        <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
        
        <Box>
            <Text fontSize={'1.1rem'} mb={4}>
            Inicié mi vida profesional en el <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
              diseño</Code>, creando piezas gráficas para distintas empresas.
            </Text>
            <Text fontSize={'1.1rem'} mb={4}>
            Mi siguiente paso fue capacitarme en <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>UX/UI Design</Code> y en las metodologías necesarias para crear productos digitales <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>centrados en el usuario.</Code>
            </Text>
            <Text fontSize={'1.1rem'} mb={4}>
            Y desde hace 1 año tomé la decisión de sumergirme en el <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>
            desarrollo web.</Code>
            </Text>
        </Box>

        <Heading
          as="h2"
          fontSize={["20px", "26px"]}
          fontWeight={600}
          mb={2}
          mt={'52px'}
        >
          🌍 Intereses personales
        </Heading>
        
        <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
        >
          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              📝
            </Text>
            <Text fontSize={'1.1rem'} mb={4}>
              Me gusta escribir, así que, intento compartir mis conocimientos y pensamientos en mi blog y redes sociales.
            </Text>
          </Box>

          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              📷
            </Text>
            <Text fontSize={'1.1rem'} mb={4}>
              Me apasiona la fotografía. La concibo como mi forma de crear arte.
            </Text>
          </Box>

          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              🎬
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
              Mi serie favorita es Mr. Robot y creo que todas las personas deberían verla.
            </Text>
          </Box>

        </Box>

        <Heading
          as="h2"
          fontSize={["20px", "26px"]}
          fontWeight={600}
          mb={2}
          mt={'52px'}
        >
          📫 Contacto
        </Heading>
        
        <Divider borderColor={colorMode === "dark" ? "#4c606f" : "#afbdd0"} mb={5} />
        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
        >
          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              🤙
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
              Gracias por haber leído un poco más sobre mí. Si quieres contactarme, puedes hacerlo <Link href='/contacto'><a><Code fontWeight={'600'} bg={'#4e77f9'} color={"white"} p={'.2em .4em'} borderRadius={'5px'}>aquí</Code></a></Link>.
            </Text>
          </Box>
        </Box>
        


      </Box>

      

      </Box>
    </motion.div>
    </Layout>
  );
}
