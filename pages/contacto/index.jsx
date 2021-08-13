import Link from "next/link";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";


export default function About() {
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
      <h1>Contacto</h1>
    </motion.div>
    </Layout>
  );
}