import { useState, useEffect } from "react";
import Head from "next/head";
import { Stack, Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import s from "./styles.module.scss";

export default function Layout({
  children,
  title,
  description,
  scrollSmoothHandler,
}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mouseleave", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: {
        duration: 0,
      },
    },
  };

  const rotateBackground = {
    default: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 50,
        ease: "linear",
      },
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon-jm.svg' />
      </Head>
      <Stack
        bg='#00000000'
        minH='100vh'
        backdropFilter={{ base: "blur(20px)", md: "blur(40px)" }}
      >
        <Stack as='div' display='flex' alignItems='center'>
          <Box
            as={motion.div}
            variants={variants}
            animate='default'
            className={s.cursor}
          />
          <Navbar scrollSmoothHandler={scrollSmoothHandler} />
          {children}
        </Stack>
      </Stack>

      <Box
        as={motion.div}
        w={{ base: "400px", md: "700px" }}
        h={{ base: "400px", md: "700px" }}
        zIndex='-1'
        opacity='0.5'
        bgImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
        position='absolute'
        top={{ base: "-20px", md: "-70px" }}
        left={{ base: "-260px", md: "-376px" }}
        borderRadius='20%'
        variants={rotateBackground}
        animate='default'
      />

      <Box
        as={motion.div}
        w={{ base: "200px", md: "450px" }}
        h={{ base: "200px", md: "450px" }}
        zIndex='-1'
        opacity='0.5'
        bgImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
        position='absolute'
        bottom={{ base: "1880px", md: "700px" }}
        right={{ base: "300px", md: "156px" }}
        borderRadius={{ base: "1%", md: "20%" }}
        variants={rotateBackground}
        animate='default'
      />
    </>
  );
}
