import Head from "next/head";
import { Stack, HStack, Icon, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon-jm.svg" />
      </Head>
      <Stack as="main" mx="auto" mt="10px">
        <Navbar />

        <main
         className="container-principal"
        >
          <Box 
            ml={'auto'}
            mr={'auto'}
            maxWidth={'800px'}
          >
            {children}
          </Box>
        </main>

        <Footer/>

        
      </Stack>
    </>
  );
}
