import Link from "next/link";
import Layout from "../../components/Layout";


export default function About() {
  return (
    <Layout
      title="Juan Montero - Sobre mi"
      description="Desarrollador Web y Diseñador UX/UI"    
    >
      <h1 >Me llamo Juan y soy peruano.</h1>
      <Link href="/" >
        <a>Home</a>
      </Link>

    </Layout>
  );
}
