import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";


export default function ProyectoViabler() {
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
          Viabler: Un marketplace que nació como e-commerce
        </Heading>
        <Box my={6} display={'flex'}>
            <Image
              className="proyecto-image"
              src='/img/proyecto-viabler.jpg'
              alt='Proyecto Viabler'
            />
        </Box>
        <Heading as={'h2'} fontSize={'24px'}>
          Primeras impresiones
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
            🎨
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Viabler es un <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>marketplace</Code> en donde artistas independientes ganan dinero con sus diseños impresos en distintos productos.
            </Text>
          </Box>
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            📆
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            El equipo de Viabler me comentó que querían sacar al mercado un MVP, para validar la idea antes de invertir más tiempo y dinero.
            </Text>
          </Box>
          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
            🛒
            </Text>
            <Text fontSize={'1.1rem'} >
            Tomamos la decisión de crear un e-commerce en Shopify, ya que la implementación se lograría en corto tiempo y la curva de aprendizaje para que ellos pudieran administrar la tienda es baja.
            </Text>
          </Box>
        </Box>

        <Heading as={'h2'} fontSize={'24px'}>
          Segunda etapa
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
            🎉
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            El mercado respondió positivamente a la idea de negocio. Entonces me pidieron que convirtamos el e-commerce en un marketplace.
            </Text>
          </Box>
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            🛒
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            El desarrollo del marketplace lo llevé a cabo en Wordpress.
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
            Debido a que no se trataba de un e-commerce como cualquier otro, tuve que familiarizarme con Liquid (el lenguaje de programación de Shopify) y con su estructura para poder solucionar requerimientos específicos del cliente.
            </Text>
          </Box>
          <Box display={'flex'} mb={3}>
            <Text fontSize={'1.1rem'} mr={2}>
            ⚡️
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            De igual manera, en Wordpress aprendí a implementar Child Themes y familiarizarme con PHP para poder crear funcionalidades específicas que resolvieran los requerimientos del equipo de Viabler.
            </Text>
          </Box>

        </Box>


      </Box>
      


    </motion.div>  
    </Layout>
  );
}