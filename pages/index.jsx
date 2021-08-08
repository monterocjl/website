import Layout from "../components/Layout";
import { Button, Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";
import Servicios from "../components/Servicios";
import { motion } from "framer-motion";

export default function Home({ posts }) {
 
  return (
    <Layout
      title="Juan Montero - Desarrollador Web y Diseñador UX/UI"
      description="Desarrollador Web y Diseñador UX/UI"
    >
    <motion.div 
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-titulo">
        <h2 className="titulo1-home">Hola 👋, soy Juan Montero</h2>
        <h1 className="titulo-home">Desarrollador Web y Diseñador UX/UI</h1>
      </div>
      <div className="tag-container">
        <Link href='/blog'><a>
        <Button
          variant={"outline"}
          borderColor={"#4e77f9"}
          color={"#4e77f9"}
          size={"sm"}
          mr={4}
          rightIcon={<ArrowForwardIcon />}
        >
          Ver blog
        </Button>
        </a></Link>

      </div>

      <Servicios />
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
