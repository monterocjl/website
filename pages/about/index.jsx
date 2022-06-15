import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { Box, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Layout
      title='Juan Montero - Sobre mi'
      description='Desarrollador Web y Diseñador UX/UI'
    >
      <motion.div
        key='modal'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box pt={12} pl={1} pr={1}>
          <Heading
            as='h1'
            fontSize={["30px", "40px"]}
            fontWeight={"bold"}
            mt={12}
            mb={12}
            textAlign={"center"}
          >
            Sobre mí
          </Heading>
        </Box>
      </motion.div>
    </Layout>
  );
}
