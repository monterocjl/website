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
            <Link key={post.slug} href={`blog/${post.slug}`}>
              <a>
                <Box
                  className="blogs-page_box_article-card"
                  bg={colorMode === "dark" ? "#0d2231" : "#f7fafc"}
                  boxShadow={
                    colorMode === "dark"
                      ? "0 21px 23px -20px #4e77f957"
                      : "0 21px 23px -20px #004aa733"
                  }
                >
                  <Image
                    className="blogs-page_box_article-card_img"
                    src={post.img}
                    alt="{post.title}"
                  ></Image>

                  <Box className="blogs-page_box_article-card_title">
                    <h1>{post.title}</h1>
                    <h2>{post.date}</h2>
                  </Box>
                </Box>
              </a>
            </Link>
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
  console.log(posts);
  return {
    props: { posts },
  };
}
