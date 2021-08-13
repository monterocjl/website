import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import Layout from "../../components/Layout";
import { Box, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";


export default function Post({ source, frontmatter: { title, img, etiqueta, date } }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title={`${ title }`}
      description="Desarrollador Web y Diseñador UX/UI"
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box className="container_articulo">
          <Box
            color={colorMode === 'dark' ? '#4e77f9' : '#4e77f9'}
            fontSize={['13px', '16px']}
            fontWeight={'bold'}
            mb={3}
          >
            { etiqueta }
          </Box>
          <Heading
            className="titulo-articulos"
            as="h1"
            fontSize={["30px", "40px"]}
            fontWeight={"bold"}
            mb={5}
            maxWidth={'700px'}
            ml={'auto'}
            mr={'auto'}
          >
            { title }
          </Heading>
          <Box
            color={colorMode === 'dark' ? '#4e77f9' : '#4e77f9'}
            fontSize={['13px', '16px']}
            fontWeight={'bold'}
            mb={5}
          >
            { date }  |  por Juan Montero
          </Box>


          <Box h={'380px'} display={'flex'}>
            <Image
              className="articulo-image"
              src={ img }
              alt={ title }
            />
          </Box>
         
          <MDXRemote {...source} components={MDXComponents} />
        </Box>
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  console.log({ source, frontmatter })
  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const post = await getFiles();
  
  
  const paths = post.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
    
  }));

  return {
    paths,
    fallback: false,
  };
}



