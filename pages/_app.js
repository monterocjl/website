import { useState } from "react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { AnimatePresence } from "framer-motion";
import LanguageContext from "../context/LanguageContext";

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState(true);

  const languageData = {
    language,
    setLanguage,
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <LanguageContext.Provider value={languageData}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
