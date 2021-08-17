import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Box, Heading, Text, Code } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";


export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title="Juan Montero - Contacto"
      description="Desarrollador Web y Diseñador UX/UI"    
    >
    <motion.div 
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        as="h1"
        fontSize={["30px", "40px"]}
        fontWeight={"bold"}
        mt={12}
        textAlign={"center"}
      >
        Contacto
      </Heading>

      <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
          mt={'30px'}
          mb={'-50px'}
      >
        <Box display={'flex'}>
          <Text fontSize={'1.1rem'} mr={2}>
            📰
          </Text>
          <Text fontSize={'1.1rem'} mb={1}>
          Si quieres contratar mis servicios, tienes algún proyecto en mente o tienes alguna, envíame un mensaje llenando el siguiente <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>formulario 👇</Code> y me contactaré contigo lo más pronto posible.
          </Text>
        </Box>
      </Box>

      <iframe className='form_contacto' width="350" height="600" src="https://2cb4b6f7.sibforms.com/serve/MUIEAF81KabVMrkoH3Uu9yd1z2OG3HSk9DEF6qqoIFRU9HAwYiRgY4YzbO0XSm-Ts4V_o_iyyUK4vf37H48tfp1ms4v__wldAU1_R1oE-JXvpILwg5znasBq6qwbSVYW1ZJhwniwW7_Lk014UPkoGER_Y7xHHAxqGHy-i6pVBJyNNoKoqhqGIFDSaP9oub9CxneEDR9gt5A9aQGU" frameBorder="0" scrolling="auto" allowFullScreen ></iframe>
    </motion.div>
    </Layout>
  );
}