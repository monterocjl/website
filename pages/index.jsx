import { useState } from "react";
import Layout from "../components/Layout";
import { Button, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";
import AboutMe from "../components/AboutMe";
import { motion } from "framer-motion";

export default function Home({ posts }) {
  const [language, setLanguage] = useState(true);

  function toggleLanguage() {
    setLanguage(!language);
  }

  return (
    <Layout
      title='Juan Montero - Desarrollador Web y Diseñador UX/UI'
      description='Desarrollador Web y Diseñador UX/UI'
    >
      <motion.div
        key='modal'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box className='container-titulo' pt={12}>
          {language ? (
            <>
              <Box fontSize='40px' className='titulo1-home'>
                Hola 👋, soy Juan Montero
              </Box>
              {/* <h1 className='titulo-home'>Desarrollador Web y Diseñador UI</h1> */}
            </>
          ) : (
            <>
              <h2 className='titulo1-home'>Hi 👋, I&apos;m Juan Montero</h2>
              <h1 className='titulo-home'>Web developer and UI Designer</h1>
            </>
          )}
        </Box>
        <AboutMe />
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
