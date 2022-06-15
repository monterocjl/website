import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function ICantHelpYou() {
  const [text, setText] = useState("E-commerce");

  useEffect(() => {
    if (text === "E-commerce") {
      setTimeout(() => {
        setText("Digital products");
      }, 2500);
    }
    if (text === "Digital products") {
      setTimeout(() => {
        setText("Blog");
      }, 2500);
    }
    if (text === "Blog") {
      setTimeout(() => {
        setText("Web for companies");
      }, 2500);
    }
    if (text === "Web for companies") {
      setTimeout(() => {
        setText("E-commerce");
      }, 2500);
    }
  }, [text]);

  return (
    <>
      <Box
        w='100%'
        maxW='1200px'
        display='flex'
        gridGap={{ base: "0px", md: "12px" }}
        fontSize={{ base: "37px", md: "45px" }}
        fontWeight='bold'
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: "1rem", md: "0" }}
        pb='135px'
      >
        <Box as='h2' mb={{ base: "-9px", md: "0px" }}>
          I can help you with
        </Box>
        <Box
          as={motion.h2}
          backgroundColor='#21D4FD'
          backgroundImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
          bgClip='text'
        >
          {text}
        </Box>
      </Box>
    </>
  );
}
