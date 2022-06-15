import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

export default function ProyectoViabler() {
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
        <Box className='container_articulo' mt='90px'>
          <Heading as={"h1"}>Un e-commerce para emprendedores</Heading>
          <Box my={6} display={"flex"} maxH='320px' w='100%'>
            <Image
              className='proyecto-image'
              src='/img/figma-1.jpg'
              alt='Proyecto Viabler'
              objectFit='cover'
              objectPosition='top'
            />
          </Box>
          <Heading as={"h2"} fontSize={"24px"}>
            Objetivo
          </Heading>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"20px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Box display={"flex"}>
              <Text fontSize={"1.1rem"} mr={2}>
                🛒
              </Text>
              <Text fontSize={"1.1rem"}>
                Crear una web en donde emprendedores puedan abrir su e-commerce.
                Que tengan un panel desde donde puedan administrar su tienda:
                Subir productos, gestionar las ventas, etc.
              </Text>
            </Box>
          </Box>

          <Heading as={"h2"} fontSize={"24px"}>
            Herramientas y tecnologías utilizadas
          </Heading>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"20px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Box display={"flex"} mb={3}>
              <Text fontSize={"1.1rem"} mr={2}>
                🎨
              </Text>
              <Text fontSize={"1.1rem"} mb={1}>
                Para el prototipado de la web estoy utilizando Figma.
              </Text>
            </Box>

            <Box display={"flex"}>
              <Text fontSize={"1.1rem"} mb={1}>
                En cuando al desarrollo:
              </Text>
            </Box>
            <Box display={"flex"} mb={3}>
              <Text fontSize={"1.1rem"} mr={2}>
                ⚡️
              </Text>
              <Text fontSize={"1.1rem"} mb={1}>
                Para el Front-end estoy utilizando Next.JS (React), Chakra UI y
                Motion Framer.
              </Text>
            </Box>
            <Box display={"flex"} mb={3}>
              <Text fontSize={"1.1rem"} mr={2}>
                ⚡️
              </Text>
              <Text fontSize={"1.1rem"} mb={1}>
                Para el Back-end estoy utilizando Strapi y MySQL. Strapi es un
                Headless CMS que permite crear y gestionar APIs de manera
                sencilla.
              </Text>
            </Box>
          </Box>

          <Heading as={"h2"} fontSize={"24px"}>
            Estas son algunas de las páginas prototipadas en Figma
          </Heading>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>
              El Dashboard inicial cuando un usuario ingresa a su panel
              administrativo.
            </Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <Image
                className='proyecto-image'
                src='/img/figma-1.jpg'
                alt='Proyecto Viabler'
                objectFit='cover'
                objectPosition='top'
              />
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>La vista de la gestión de pedidos.</Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <Image
                className='proyecto-image'
                src='/img/figma-2.jpg'
                alt='Proyecto Viabler'
                objectFit='cover'
                objectPosition='top'
              />
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>La vista del e-commerce.</Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <Image
                className='proyecto-image'
                src='/img/figma-4.jpg'
                alt='Proyecto Viabler'
                objectFit='cover'
                objectPosition='top'
              />
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>La vista mobile del e-commerce.</Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <Image
                className='proyecto-image'
                src='/img/figma-6.jpg'
                alt='Proyecto Viabler'
                objectFit='cover'
                objectPosition='top'
              />
            </Box>
          </Box>

          <Heading as={"h2"} fontSize={"24px"}>
            El avance del proyecto en cuanto a desarrollo
          </Heading>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>
              El login ya está desarrollado. Se utilizó JWT junto con Strapi. Al
              iniciar sesión los usuarios son redireccionados a su panel
              administrativo. En la URL aparece el nombre de su tienda.
            </Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/login.mp4'
              />
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>
              La estructura del Sidebar y el Header ya está desarrollada para
              desktop y mobile.
            </Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/responsive.mp4'
              />
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>
              Las notificaciones ya están implementadas.
            </Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/notifications.mp4'
              />
            </Box>
          </Box>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Text fontSize={"1rem"}>
              Estas son las colecciones creadas en Strapi, que consumo desde el
              front-end a través de API Rest. Datos de usuario, la tienda, las
              notificaciones, la moneda y más.
            </Text>
            <Box mt={3} display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/strapi.mp4'
              />
            </Box>
          </Box>
          <Text fontSize={"1rem"}>
            Este es un proyecto real en el que vengo trabajando desde inicios de
            mayo. Como lo menciono en mi resumen, soy una persona con espíritu
            emprendedor y una de las cosas que más disfruto es crear. Partir de
            una idea y hacerla tangible gracias al desarrollo.
          </Text>
        </Box>
      </motion.div>
    </Layout>
  );
}
