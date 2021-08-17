import React from "react";
import Layout from "../../components/Layout";
import { Box, Heading, Text, Code, Image } from "@chakra-ui/react";
import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";

export default function Blog({ posts }) {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <Heading
        as="h1"
        fontSize={["30px", "40px"]}
        fontWeight={"bold"}
        mt={12}
        textAlign={"center"}
      >
        Blog
      </Heading>

      <Box
          bg={colorMode === "dark" ? "#0d2231" : "#f4f9ff"}
          borderWidth={colorMode === "dark" ? "0px" : "1px"}
          borderRadius={'10px'}
          p={'20px 15px'}
          mt={'30px'}
          mb={'20px'}
        >
          <Box display={'flex'}>
            <Text fontSize={'1.1rem'} mr={2}>
              📰
            </Text>
            <Text fontSize={'1.1rem'} mb={1}>
            Escribo sobre <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>producto</Code>, <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>negocios</Code>, <Code fontWeight={'600'} bg={colorMode === "dark" ? "#193548" : "#c9d1ec"} p={'.2em .4em'} borderRadius={'5px'}>desarrollo</Code> y también sobre mi visión y experiencia en el mundo digital.
            </Text>
          </Box>
        </Box>
      <Box className="blog-page">
          {posts.map((post) => (
       <React.Fragment key={post.slug}>

                <Box
                  className="blogs-page_box_article-card"
                  borderRadius={'10px'}
                  bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
                  boxShadow={ colorMode === "dark" ? "none" : "0 21px 23px -20px #004aa733"
                  }
                >
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <Image
                        className="blogs-page_box_article-card_img"
                        borderRadius={'10px 10px 0px 0px'}
                        src={post.img}
                        alt={post.title}
                      />
                    </a>
                  </Link>

                  <Box className="blogs-page_box_article-card_title">
                    <Box display={'flex'}>
                        <Box
                          mr={'8px'}
                          color={colorMode === 'dark' ? '#4e77f9' : '#757575'}
                          fontSize={'13px'}
                        >
                          <p className="blogs-page_box_article-card_title_fecha font-for-parrafos">{post.date} • </p>
                        </Box>
                        <Box className=''
                          display={'flex'}
                          color={colorMode === 'dark' ? 'white' : '#091721'}
                          bg={colorMode === 'dark' ? '#4e77f9' : '#c9d1ec'}
                          borderRadius="5px"
                          px={3}
                          fontSize={'12px'}
                          width={'fit-content'}
                          alignItems={'center'}
                        >
                        {post.etiqueta}
                        </Box>
                      </Box>
                      <Link href={`/blog/${post.slug}`}>
                      <a>
                        <h2 className="blogs-page_box_article-card_title_h2">
                          {post.title}
                        </h2>
                      </a>
                        </Link>

                        <p className="blogs-page_box_article-card_title_parrafo">
                          {post.subtitle}
                        </p>

                  </Box>
                </Box>
          </React.Fragment>

          ))}
        </Box>

        {/* <Box
          className="blogs-page_newsletter"
          borderRadius={'10px'}
          p={'25px'}
          bg={'#2f436e'}
        >
        </Box> */}


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
