import React from "react";
import Layout from "../../components/Layout";
import { Image } from "@chakra-ui/react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { getAllFilesMetadata } from "../../lib/mdx";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";

export default function Blog({ posts }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title="Juan Montero - Desarrollador Web y Diseñador UX/UI"
      description="Desarrollador Web y Diseñador UX/UI"
    >
      <h1>Este es mi blog</h1>
      <Box className="blog-page">
        <Box className="blogs-page_box">
          {posts.map((post) => (
       <React.Fragment key={post.slug}>
            
                <Box 
                  className="blogs-page_box_article-card"

                  bg={colorMode === "dark" ? "#0b1c28" : "#f7fafc"}
                  boxShadow={
                    colorMode === "dark"
                      ? "none"
                      : "0 21px 23px -20px #004aa733"
                  }
                >
                  <Link href={`/blog/${post.slug}`}>
                      <a>
                  <Image
                    className="blogs-page_box_article-card_img"
                    src={post.img}
                    alt="{post.title}"
                  ></Image>
                      </a>
                      </Link> 
                                 
                  <Box className="blogs-page_box_article-card_title">
                    <Box display={'flex'}>
                        <Box 
                          mr={'8px'}
                          color={colorMode === 'dark' ? '#4e77f9' : '#757575'}
                          fontSize={'15px'}
                        >
                          <p className="blogs-page_box_article-card_title_fecha font-for-parrafos">{post.date} • </p>
                        </Box>
                        <Box className=''
                          display={'flex'}
                          color={colorMode === 'dark' ? 'white' : '#091721'}
                          bg={colorMode === 'dark' ? '#4e77f9' : '#e2e8f0'}
                          borderRadius="xl"
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

        <Box className="blogs-page_newsletter">
          {" "}
          aqui la suscripcion y quien soy
        </Box>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
