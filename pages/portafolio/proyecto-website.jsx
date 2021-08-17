import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";


export default function ProyectoWebsite() {
  const { colorMode, toggleColorMode } = useColorMode();  
  return (
    <Layout
      title="Juan Montero - Portafolio"
      description="Desarrollador Web y Diseñador UX/UI"    
    >
    <motion.div 
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className="container_articulo"
      >
        <Heading as={'h1'}>
          Mi sitio web / blog
        </Heading>
        <Box my={6} display={'flex'}>
            <Image
              className="proyecto-image"
              src='/img/proyecto-website.jpg'
              alt='Proyecto Viabler'
            />
        </Box>
        <Heading as={'h2'} fontSize={'24px'}>
          Objetivos
        </Heading>
        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
          mt={'15px'}
          mb={'40px'}
          pr={4}
        >
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            👨‍🎨
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Construir una web que vaya en sintonía con mi marca personal. Que sea coherente desde lo visual hasta lo abstracto.
            </Text>
          </Box>
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            👨‍💻
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Mi primera web la creé con HTML, CSS y un par de líneas de Javascript. Esta vez, y con el fin de mejorar la experiencia del usuario, decidí rediseñarla y construirla con Next.Js.
            </Text>
          </Box>
        </Box>

        <Heading as={'h2'} fontSize={'24px'}>
          Aprendizaje
        </Heading>
        <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
          mt={'15px'}
          mb={'40px'}
          pr={4}
        >
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            ⚡️
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Empezando por el diseño. Pude reforzar mis conocimientos de <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Figma</Code>, al utilizarla para definir los colores, tipos de fuentes y estructura de mi web.
            </Text>
          </Box>
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            ⚡️
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Aprendí a utilizar <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Chakra UI</Code> y me permitió acelerar la construcción de mi web y que sea responsive. 
            </Text>
          </Box>

          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            ⚡️
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Aprendí a implementar un blog dinámico que se nutre de los artículos que voy escribiendo en <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>Markdown/MDX</Code>.
            </Text>
          </Box>

        </Box>


      </Box>
      
      

    </motion.div>  
    </Layout>
  );
}