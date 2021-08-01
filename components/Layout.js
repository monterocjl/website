import Head from "next/head"
import { Stack, HStack, Icon} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { GrTwitter, GrInstagram } from "react-icons/gr";

export default function Layout({children, title, description}) {
    
    return (
        <>
        <Head>        
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon-jm.svg" />
        </Head>
        <Stack
            as="main"
            mx="auto"
            mt="10px"
        >
        <Navbar/>

        <main className='container-principal'>
            {children}
        </main>

        <HStack
            as={'footer'}
            spacing={5}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Icon as={GrTwitter} />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Icon as={GrInstagram} />
            </a>
        </HStack>
        </Stack>
        </>
    )
}
