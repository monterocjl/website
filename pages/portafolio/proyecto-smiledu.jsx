import Link from "next/link";
import Layout from "../../components/Layout";
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
          <Heading as={"h1"}>Nuevo feature para Smiledu</Heading>
          <Box my={6} display={"flex"} maxH='280px' w='100%'>
            <Image
              className='proyecto-image'
              src='/img/smiledu-1.png'
              alt='Proyecto Viabler'
              objectFit='cover'
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
                👨‍🏫
              </Text>
              <Text fontSize={"1.1rem"}>
                En Smiledu, una plataforma de gestión para colegios, se solicitó
                el diseño y creación de un nuevo feature: Un módulo en donde los
                colegios puedan gestionar sus documentos institucionales. Un
                simil sería Google Drive o Dropbox.
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
                Para el prototipado se utilizó Adobe XD.
              </Text>
            </Box>

            <Box display={"flex"}>
              <Text fontSize={"1.1rem"} mb={1}>
                En cuando al desarrollo:
              </Text>
            </Box>
            <Box display={"flex"}>
              <Text fontSize={"1.1rem"} mr={2}>
                ⚡️
              </Text>
              <Text fontSize={"1.1rem"}>
                La plataforma está construída en Angular, Pug Js, Sass y
                utilizando componentes de Angular Material.
              </Text>
            </Box>
          </Box>

          <Heading as={"h2"} fontSize={"24px"}>
            Mis responsabilidades en este trabajo fueron las de diseño UI y
            maquetación web.
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
            <Box display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/smiledu1.mp4'
              />
            </Box>
          </Box>

          <Text fontSize={"1rem"}>
            Me encargué del prototipado del nuevo feature, siguiendo los
            lineamientos de diseño y look & feel de Smiledu.
          </Text>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Box display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/smiledu2.mp4'
              />
            </Box>
          </Box>
          <Text fontSize={"1rem"}>
            Luego de que el diseño fuese aprobado por los líderes de producto,
            procedí con el desarrollo.
          </Text>
          <Box
            bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
            borderWidth={colorMode === "dark" ? "0px" : "1px"}
            borderRadius={"10px"}
            p={"14px 15px"}
            mt={"15px"}
            mb={"40px"}
            pr={4}
          >
            <Box display={"flex"} maxH='100%' w='100%'>
              <video
                className='video-portafolio'
                autoPlay
                muted
                loop
                src='/videos/smiledu3.mp4'
              />
            </Box>
          </Box>
          <Text fontSize={"1rem"}>
            La parte del desarrollo la llevé a cabo junto a un compañero
            fullstack. Yo me encargué de la maquetación e implementación de
            alguna lógica necesaria para la correcta implementación de los
            componentes de angular material.
          </Text>
        </Box>
      </motion.div>
    </Layout>
  );
}
